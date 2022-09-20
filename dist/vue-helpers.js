var k = Object.defineProperty;
var W = (e, t, s) => t in e ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var n = (e, t, s) => (W(e, typeof t != "symbol" ? t + "" : t, s), s);
import { ref as h, reactive as y, resolveComponent as d, openBlock as l, createBlock as p, withCtx as S, renderSlot as b, createCommentVNode as f, createElementBlock as _, createTextVNode as w, normalizeProps as L, guardReactiveProps as T, createElementVNode as P, withModifiers as j, createVNode as O, mergeProps as V } from "vue";
import g from "axios";
import $ from "moment";
class v {
  constructor() {
    n(this, "loading", h(!1));
    n(this, "result", h([]));
  }
  static create() {
    return new v();
  }
  async search(t, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await g.post(`${t}/search`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    this.result.value = r.result, this.loading.value = !1;
  }
  async restore(t, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await g.post(`${t}/restore`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    return this.loading.value = !1, r;
  }
}
const c = y({
  default: []
});
function x() {
  return {
    createBag(e) {
      c[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (c[t] = Object.keys(e.response.data.errors).map(
        (r) => ({
          key: r,
          message: e.response.data.errors[r][0]
        })
      )), e;
    },
    get(e, t = "default") {
      const s = c[t];
      if (!s)
        return;
      const r = s.find((a) => a.key === e);
      if (!!r)
        return {
          message: r.message,
          variant: "danger"
        };
    },
    clear(e, t = "default") {
      if (e) {
        const s = c[t];
        if (!s) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const r = s.findIndex((a) => a.key === e);
        s.splice(r, 1);
        return;
      }
      c[t] = [];
    }
  };
}
class q {
  constructor(t) {
    n(this, "loadPath", "");
    n(this, "submitPath", "");
    n(this, "bag", "default");
    n(this, "model", y({}));
    n(this, "form", y({}));
    n(this, "original", y({}));
    n(this, "isLoading", h(!1));
    n(this, "isLoaded", h(!0));
    n(this, "isSubmitting", h(!1));
    n(this, "isSubmitted", h(!1));
    n(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.errorBag), this.setAttributes(t.form);
  }
  static create(t) {
    return new q(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t, this.errors = x(), this.errors.createBag(this.bag);
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
  async submit(t, s, r = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const a = s ? s(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: i } = await g.post(t || this.submitPath, a, r).catch((u) => {
      throw this.isSubmitting.value = !1, this.errors.set(u, this.bag), u;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, i;
  }
  async advancedSubmit(t) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: s } = await Promise.resolve(t(g, this.form)).catch(
      (r) => {
        throw this.isSubmitting.value = !1, this.errors.set(r, this.bag), r;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, s;
  }
  async load(t, s) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: r } = await g.get(this.loadPath ? this.loadPath : t, {
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
const m = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
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
}, B = /* @__PURE__ */ w("Submit"), N = /* @__PURE__ */ w("Processing..."), A = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function I(e, t, s, r, a, i) {
  const u = d("o-button");
  return l(), p(u, { disabled: s.loading }, {
    default: S(() => [
      s.loading ? f("", !0) : b(e.$slots, "default", { key: 0 }, () => [
        B
      ]),
      s.loading ? b(e.$slots, "loading", { key: 1 }, () => [
        N
      ]) : f("", !0),
      s.loading ? (l(), _("i", A)) : f("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const Y = /* @__PURE__ */ m(E, [["render", I]]), D = {
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
}, C = /* @__PURE__ */ P("ul", null, [
  /* @__PURE__ */ P("li")
], -1);
function J(e, t, s, r, a, i) {
  return b(e.$slots, "default", L(T({ add: i.add, remove: i.remove, items: a.items })), () => [
    C
  ]);
}
const z = /* @__PURE__ */ m(D, [["render", J]]), M = {
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
    dateFormatter(e) {
      return e ? $(e).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit("update:modelValue", this.query ? $(this.query).format(this.submitFormat) : null);
    }
  }
};
function R(e, t, s, r, a, i) {
  const u = d("o-datepicker");
  return l(), p(u, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      i.updateQuery
    ],
    "date-formatter": i.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const U = /* @__PURE__ */ m(M, [["render", R]]), Q = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, G = /* @__PURE__ */ w(" An error occurred. Try again? ");
function H(e, t, s, r, a, i) {
  const u = d("o-loading"), o = d("o-button");
  return l(), _("div", null, [
    s.form.isLoaded.value ? (l(), _("form", {
      key: 0,
      onSubmit: t[0] || (t[0] = j((F) => e.$emit("submit"), ["prevent"]))
    }, [
      b(e.$slots, "default")
    ], 32)) : f("", !0),
    O(u, {
      active: s.form.isLoading.value
    }, null, 8, ["active"]),
    !s.form.isLoaded.value && !s.form.isLoading.value ? (l(), p(o, {
      key: 1,
      onClick: t[1] || (t[1] = (F) => s.form.load())
    }, {
      default: S(() => [
        G
      ]),
      _: 1
    })) : f("", !0)
  ]);
}
const K = /* @__PURE__ */ m(Q, [["render", H]]), X = {
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
}, Z = ["width", "height"];
function tt(e, t, s, r, a, i) {
  return l(), _("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, Z);
}
const et = /* @__PURE__ */ m(X, [["render", tt]]), st = {
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
      errors: x()
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
function rt(e, t, s, r, a, i) {
  const u = d("o-input"), o = d("o-field");
  return l(), p(o, V({ label: s.label }, r.errors.get(s.name, s.bag)), {
    default: S(() => [
      O(u, V(e.$attrs, {
        onFocus: t[0] || (t[0] = (F) => r.errors.clear(s.name, s.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const at = /* @__PURE__ */ m(st, [["render", rt]]), it = {
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
      search: v.create()
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
function ot(e, t, s, r, a, i) {
  const u = d("o-inputitems");
  return l(), p(u, V(e.$attrs, {
    modelValue: a.query,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => a.query = o),
    data: r.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (o) => i.addedTag(o)),
    onRemove: t[2] || (t[2] = (o) => i.removedTag(o)),
    onFocus: t[3] || (t[3] = (o) => i.searchTags()),
    onTyping: t[4] || (t[4] = (o) => i.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const nt = /* @__PURE__ */ m(it, [["render", ot]]), ht = {
  AutoCompleteSearch: v,
  FormBuilder: q,
  useFormErrors: x,
  WyxosButton: Y,
  WyxosCollection: z,
  WyxosDatepicker: U,
  WyxosForm: K,
  WyxosImage: et,
  WyxosInput: at,
  WyxosTags: nt
};
export {
  v as AutoCompleteSearch,
  q as FormBuilder,
  Y as WyxosButton,
  z as WyxosCollection,
  U as WyxosDatepicker,
  K as WyxosForm,
  et as WyxosImage,
  at as WyxosInput,
  nt as WyxosTags,
  ht as default,
  x as useFormErrors
};
