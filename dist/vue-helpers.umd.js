(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("axios"),require("moment")):typeof define=="function"&&define.amd?define(["exports","vue","axios","moment"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i.VueHelpers={},i.Vue,i.axios,i.moment))})(this,function(i,e,m,S){"use strict";var H=Object.defineProperty;var G=(i,e,m)=>e in i?H(i,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):i[e]=m;var d=(i,e,m)=>(G(i,typeof e!="symbol"?e+"":e,m),m);const b=s=>s&&typeof s=="object"&&"default"in s?s:{default:s},h=b(m),p=b(S);class g{constructor(){d(this,"loading",e.ref(!1));d(this,"result",e.ref([]))}static create(){return new g}async search(t,r){this.loading.value=!0,this.result.value=[];const{data:a}=await h.default.post(`${t}/search`,r).catch(o=>{throw this.loading.value=!1,o});this.result.value=a.result,this.loading.value=!1}async restore(t,r){this.loading.value=!0,this.result.value=[];const{data:a}=await h.default.post(`${t}/restore`,r).catch(o=>{throw this.loading.value=!1,o});return this.loading.value=!1,a}}const f=e.reactive({default:[]});function y(){return{createBag(s){f[s]=[]},set(s,t="default"){throw s.response&&s.response.data&&s.response.data.errors&&(f[t]=Object.keys(s.response.data.errors).map(a=>({key:a,message:s.response.data.errors[a][0]}))),s},get(s,t="default"){const r=f[t];if(!r)return{message:"",variant:""};const a=r.find(o=>o.key===s);return a?{message:a.message,variant:"danger"}:{message:"",variant:""}},clear(s,t="default"){if(s){const r=f[t];if(!r){console.warn(`Bag ${t} is not defined.`);return}const a=r.findIndex(o=>o.key===s);r.splice(a,1);return}f[t]=[]}}}class _{constructor(t){d(this,"loadPath","");d(this,"submitPath","");d(this,"bag","default");d(this,"model",e.reactive({}));d(this,"form",e.reactive({}));d(this,"original",e.reactive({}));d(this,"isLoading",e.ref(!1));d(this,"isLoaded",e.ref(!0));d(this,"isSubmitting",e.ref(!1));d(this,"isSubmitted",e.ref(!1));d(this,"errors",null);this.setPath(t.submitPath),this.loadPath=t.loadPath,this.setErrors(t.errorBag),this.setAttributes(t.form)}static create(t){return new _(t)}setPath(t){this.submitPath=t}setErrors(t){this.bag=t,this.errors=y(),this.errors.createBag(this.bag)}setAttributes(t){Object.assign(this.form,t),Object.assign(this.original,t)}getError(t){return this.errors.get(t,this.bag)}clearError(t){this.errors.clear(t,this.bag)}async submit(t,r,a={}){this.errors.clear(null,this.bag),this.isSubmitting.value=!0,this.isSubmitted.value=!1;const o=r?r(Object.assign({},this.form)):JSON.parse(JSON.stringify(this.form)),{data:n}=await h.default.post(t||this.submitPath,o,a).catch(u=>{throw this.isSubmitting.value=!1,this.errors.set(u,this.bag),u});return this.errors.clear(null,this.bag),Object.assign(this.original,JSON.parse(JSON.stringify(this.form))),this.isSubmitting.value=!1,this.isSubmitted.value=!0,n}async advancedSubmit(t){this.isSubmitting.value=!0,this.isSubmitted.value=!1;const{data:r}=await Promise.resolve(t(h.default,this.form)).catch(a=>{throw this.isSubmitting.value=!1,this.errors.set(a,this.bag),a});return this.isSubmitting.value=!1,this.isSubmitted.value=!0,r}async load(t,r){this.isLoading.value=!0,this.isLoaded.value=!1;const{data:a}=await h.default.get(t||this.loadPath,{params:r}).catch(o=>{throw this.isLoading.value=!1,this.isLoaded.value=!1,o});return this.setAttributes(a.form),a.model&&Object.assign(this.model,a.model),this.isLoading.value=!1,this.isLoaded.value=!0,a}reset(){Object.assign(this.form,JSON.parse(JSON.stringify(this.original)))}}const c=(s,t)=>{const r=s.__vccOpts||s;for(const[a,o]of t)r[a]=o;return r},$={name:"WyxosButton",props:{loading:{default:!1,type:Boolean}}},w=e.createTextVNode("Submit"),k=e.createTextVNode("Processing..."),x={key:2,class:"fas fa-spinner fa-spin"};function B(s,t,r,a,o,n){const u=e.resolveComponent("o-button");return e.openBlock(),e.createBlock(u,{disabled:r.loading},{default:e.withCtx(()=>[r.loading?e.createCommentVNode("",!0):e.renderSlot(s.$slots,"default",{key:0},()=>[w]),r.loading?e.renderSlot(s.$slots,"loading",{key:1},()=>[k]):e.createCommentVNode("",!0),r.loading?(e.openBlock(),e.createElementBlock("i",x)):e.createCommentVNode("",!0)]),_:3},8,["disabled"])}const q=c($,[["render",B]]),F={name:"WyxosCollection",props:{modelValue:{required:!0,type:Array}},emits:["update:modelValue"],data(){return{items:[]}},mounted(){this.items=this.modelValue},methods:{add(s){this.items.push(s),this.$emit("update:modelValue",this.items)},remove(s){this.items.splice(s,1),this.$emit("update:modelValue",this.items)}}},W=e.createElementVNode("ul",null,[e.createElementVNode("li")],-1);function C(s,t,r,a,o,n){return e.renderSlot(s.$slots,"default",e.normalizeProps(e.guardReactiveProps({add:n.add,remove:n.remove,items:o.items})),()=>[W])}const P=c(F,[["render",C]]),N={name:"WyxosDatepicker",props:{modelValue:{required:!0,type:[null,String]},displayFormat:{type:String,default:"DD/MM/YYYY"},submitFormat:{type:String,default:"YYYY-MM-DD"}},emits:["update:modelValue"],data(){return{query:null}},mounted(){this.modelValue&&(this.query=p.default(this.modelValue,this.submitFormat)._d)},methods:{dateFormatter(s){return s?p.default(s).format(this.displayFormat):null},updateQuery(){this.$emit("update:modelValue",this.query?p.default(this.query).format(this.submitFormat):null)}}};function O(s,t,r,a,o,n){const u=e.resolveComponent("o-datepicker");return e.openBlock(),e.createBlock(u,{modelValue:o.query,"onUpdate:modelValue":[t[0]||(t[0]=l=>o.query=l),n.updateQuery],"date-formatter":n.dateFormatter},null,8,["modelValue","date-formatter","onUpdate:modelValue"])}const T=c(N,[["render",O]]),E={name:"WyxosForm",props:{form:{type:Object,required:!0}},emits:["submit"]},j=e.createTextVNode(" An error occurred. Try again? ");function L(s,t,r,a,o,n){const u=e.resolveComponent("o-loading"),l=e.resolveComponent("o-button");return e.openBlock(),e.createElementBlock("div",null,[r.form.isLoaded.value?(e.openBlock(),e.createElementBlock("form",{key:0,class:"form",onSubmit:t[0]||(t[0]=e.withModifiers(V=>s.$emit("submit"),["prevent"]))},[e.renderSlot(s.$slots,"default")],32)):e.createCommentVNode("",!0),e.createVNode(u,{active:r.form.isLoading.value},null,8,["active"]),!r.form.isLoaded.value&&!r.form.isLoading.value?(e.openBlock(),e.createBlock(l,{key:1,onClick:t[1]||(t[1]=V=>r.form.load())},{default:e.withCtx(()=>[j]),_:1})):e.createCommentVNode("",!0)])}const z=c(E,[["render",L]]),A={name:"WyxosImage",props:{src:{type:[File,String],required:!0},resize:{type:Object,default:null}},data(){return{width:0,height:0}},mounted(){this.loadImage()},methods:{loadImage(){return typeof this.src=="object"?this.loadFile():this.loadPath()},loadFile(){const s=new FileReader;s.onload=t=>{const r=t.target.result;this.$refs.image.src=r,this.width=this.resize?this.resize.width:r.width,this.height=this.resize?this.resize.height:r.height},s.readAsDataURL(this.src)},loadPath(){const s=new Image;s.onload=()=>{this.$refs.image.src=this.src,this.width=this.resize?this.resize.width:s.width,this.height=this.resize?this.resize.height:s.height},s.src=this.src}}},I=["width","height"];function v(s,t,r,a,o,n){return e.openBlock(),e.createElementBlock("img",{ref:"image",src:"",alt:"",width:o.width,height:o.height},null,8,I)}const D=c(A,[["render",v]]),Y={name:"WyxosInput",props:{label:{type:String,default:""},name:{type:String,required:!0},bag:{type:String,default:"default"}},setup(){return{errors:y()}},computed:{inputAttrs(){const s=this.$attrs;return Object.keys(s).forEach(t=>{["class"].includes(t)||s[t]}),s}}};function M(s,t,r,a,o,n){const u=e.resolveComponent("o-input"),l=e.resolveComponent("o-field");return e.openBlock(),e.createBlock(l,e.mergeProps({label:r.label},a.errors.get(r.name,r.bag)),{default:e.withCtx(()=>[e.createVNode(u,e.mergeProps(s.$attrs,{onFocus:t[0]||(t[0]=V=>a.errors.clear(r.name,r.bag))}),null,16)]),_:1},16,["label"])}const J=c(Y,[["render",M]]),R={name:"WyxosTags",props:{path:{type:String,required:!0},modelValue:{type:Array,required:!0},formatter:{type:Function,required:!0},excludeFormatter:{type:Function,default:null}},emits:["update:modelValue"],setup(){return{search:g.create()}},data(){return{query:[]}},async mounted(){if(this.modelValue&&this.modelValue.length){const{result:s}=await this.search.restore(this.path,{values:this.modelValue});this.query=s,this.$emit("update:modelValue",this.query.map(t=>this.formatter(t)))}},methods:{searchTags(s){return this.search.search(this.path,{value:s,type:"service-category",exclude:this.query.map(t=>t.id)})},addedTag(){this.$emit("update:modelValue",this.query.map(s=>this.formatter(s)))},removedTag(){this.$emit("update:modelValue",this.query.map(s=>this.formatter(s)))}}};function U(s,t,r,a,o,n){const u=e.resolveComponent("o-inputitems");return e.openBlock(),e.createBlock(u,e.mergeProps(s.$attrs,{modelValue:o.query,"onUpdate:modelValue":t[0]||(t[0]=l=>o.query=l),data:a.search.result.value,"open-on-focus":!0,autocomplete:"",onAdd:t[1]||(t[1]=l=>n.addedTag(l)),onRemove:t[2]||(t[2]=l=>n.removedTag(l)),onFocus:t[3]||(t[3]=l=>n.searchTags()),onTyping:t[4]||(t[4]=l=>n.searchTags(l))}),null,16,["modelValue","data"])}const Q=c(R,[["render",U]]);i.AutoCompleteSearch=g,i.FormBuilder=_,i.WyxosButton=q,i.WyxosCollection=P,i.WyxosDatepicker=T,i.WyxosForm=z,i.WyxosImage=D,i.WyxosInput=J,i.WyxosTags=Q,i.useFormErrors=y,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
