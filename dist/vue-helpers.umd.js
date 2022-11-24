(function(n,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue"),require("axios"),require("moment")):typeof define=="function"&&define.amd?define(["exports","vue","axios","moment"],s):(n=typeof globalThis<"u"?globalThis:n||self,s(n.VueHelpers={},n.Vue,n.axios,n.moment))})(this,function(n,s,m,j){"use strict";var Z=Object.defineProperty;var ee=(n,s,m)=>s in n?Z(n,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[s]=m;var u=(n,s,m)=>(ee(n,typeof s!="symbol"?s+"":s,m),m);const w=a=>a&&typeof a=="object"&&"default"in a?a:{default:a},h=w(m),_=w(j);class p{constructor(){u(this,"loading",s.ref(!1));u(this,"result",s.ref([]))}static create(){return new p}async search(e,t){this.loading.value=!0,this.result.value=[];const{data:i}=await h.default.post(`${e}/search`,t).catch(r=>{throw this.loading.value=!1,r});this.result.value=i.result,this.loading.value=!1}async restore(e,t){this.loading.value=!0,this.result.value=[];const{data:i}=await h.default.post(`${e}/restore`,t).catch(r=>{throw this.loading.value=!1,r});return this.loading.value=!1,i}}const y=s.reactive({default:[]});function b(){return{createBag(a){y[a]=[]},set(a,e="default"){throw a.response&&a.response.data&&a.response.data.errors&&(y[e]=Object.keys(a.response.data.errors).map(i=>({key:i,message:a.response.data.errors[i][0]}))),a},get(a,e="default"){const t=y[e];if(!t)return{message:"",variant:""};const i=t.find(r=>r.key===a);return i?{message:i.message,variant:"danger"}:{message:"",variant:""}},clear(a,e="default"){if(a){const t=y[e];if(!t){console.warn(`Bag ${e} is not defined.`);return}const i=t.findIndex(r=>r.key===a);t.splice(i,1);return}y[e]=[]}}}class q{constructor(e){u(this,"loadPath","");u(this,"submitPath","");u(this,"bag","");u(this,"model",s.reactive({}));u(this,"form",s.reactive({}));u(this,"original",s.reactive({}));u(this,"isLoading",s.ref(!1));u(this,"isLoaded",s.ref(!0));u(this,"isSubmitting",s.ref(!1));u(this,"isSubmitted",s.ref(!1));u(this,"errors",null);this.setPath(e.submitPath),this.loadPath=e.loadPath,this.setErrors(e.bag),this.setAttributes(e.form)}static create(e){return new q(e)}setPath(e){this.submitPath=e}setErrors(e){this.bag=e||"default",this.errors=b(),this.errors.createBag(this.bag)}setAttributes(e){Object.assign(this.form,e),Object.assign(this.original,e)}getError(e){return this.errors.get(e,this.bag)}clearError(e){this.errors.clear(e,this.bag)}async submit(e,t,i={}){this.errors.clear(null,this.bag),this.isSubmitting.value=!0,this.isSubmitted.value=!1;const r=t?t(Object.assign({},this.form)):JSON.parse(JSON.stringify(this.form)),{data:d}=await h.default[i.method||"post"](e||this.submitPath,r,i).catch(c=>{throw this.isSubmitting.value=!1,this.errors.set(c,this.bag),c});return this.errors.clear(null,this.bag),Object.assign(this.original,JSON.parse(JSON.stringify(this.form))),this.isSubmitting.value=!1,this.isSubmitted.value=!0,d}async advancedSubmit(e){this.isSubmitting.value=!0,this.isSubmitted.value=!1;const{data:t}=await Promise.resolve(e(h.default,this.form)).catch(i=>{throw this.isSubmitting.value=!1,this.errors.set(i,this.bag),i});return this.isSubmitting.value=!1,this.isSubmitted.value=!0,t}async load(e,t){this.isLoading.value=!0,this.isLoaded.value=!1;const{data:i}=await h.default.get(e||this.loadPath,{params:t}).catch(r=>{throw this.isLoading.value=!1,this.isLoaded.value=!1,r});return this.setAttributes(i.form),i.model&&Object.assign(this.model,i.model),this.isLoading.value=!1,this.isLoaded.value=!0,i}reset(){Object.assign(this.form,JSON.parse(JSON.stringify(this.original)))}}class V{constructor(){u(this,"structure",{});u(this,"query",s.reactive({items:[],perPage:0,total:0,isLoading:!1,isLoaded:!1,isFilterActive:!1}));u(this,"params",s.reactive({page:1}));u(this,"router",null)}static create(e,t={},i={},r){i=Object.assign({base:"/api/admin",route:`${e}.index`},i);const d=i.base,c={route:i.route,index:i.index||`${d}/${e}/index`,destroy:`${d}/${e}/destroy`},o=new this;return o.options=i,o.structure=t,o.params=Object.assign(o.params,t),o.router=r,o.urls=c,o}async fetch(e){this.query.isLoading=!0,this.query.isLoaded=!1;const{data:t}=await h.default.get(e||this.urls.index,{params:this.params}).catch(i=>{throw this.query.isLoading=!1,i});return await this.router.push({name:this.urls.route,query:this.params}),this.query.isLoading=!1,this.query.isLoaded=!0,t}async load(e){const t=await this.fetch(e);return Object.assign(this.query,t.query,{items:t.query.items.map(i=>({...i,isProcessing:!1}))}),t}onPageChange(e){return this.params.page=e,this.load()}async action(e,{row:t,index:i,remove:r,method:d},c={}){t.isProcessing=!0;const o={id:t.id,...c};if(d==="delete"){const{data:l}=await h.default.delete(e,{data:o}).catch(g=>{throw t.isProcessing=!1,g});t.isProcessing=!1,l.row&&Object.assign(t,l.row)}else{const{data:l}=await h.default.post(e,o).catch(g=>{throw t.isProcessing=!1,g});t.isProcessing=!1,l.row&&Object.assign(t,l.row)}if(r){const l=await this.fetch();if(this.query.items.splice(i,1),!l.query.items.length){this.params.page--,await this.load();return}this.query.items.length<l.query.items.length&&this.query.items.push(l.query.items[l.query.items.length-1])}}destroy(e,t){return this.action(this.urls.destroy,{...e,remove:!0},t)}async resetFilter(e=null){Object.assign(this.params,this.structure),this.query.isFilterActive=!1,await this.load(e)}}class ${constructor(){u(this,"api",null);u(this,"structure",null);u(this,"query",s.reactive({items:[],perPage:0,total:0,isLoading:!1,isLoaded:!1,isFilterActive:!1}));u(this,"params",s.reactive({page:1}))}static create(e,t){const i=new this;return i.structure=()=>Object.assign({},e),Object.assign(i.params,e),i.api=h.default.create(t.axios||{}),i}async fetch(e){this.query.isLoading=!0,this.query.isLoaded=!1;const{data:t}=await this.api.get(e,{params:this.params}).catch(i=>{throw this.query.isLoading=!1,i});return this.query.isLoading=!1,this.query.isLoaded=!0,t}async load(e){const t=await this.fetch(e,{params:this.params});return Object.assign(this.query,t.query,{items:t.query.items.map(i=>({...i,isProcessing:!1}))}),t}onPageChange(e){return this.params.page=e,this.load()}async action(e,{item:{row:t,index:i},remove:r,method:d},c={}){t.isProcessing=!0;const o={id:t.id,...c};if(d==="delete"){const{data:l}=await this.api.delete(e,{data:o}).catch(g=>{throw t.isProcessing=!1,g});t.isProcessing=!1,l.row&&Object.assign(t,l.row)}else{const{data:l}=await this.api.post(e,o).catch(g=>{throw t.isProcessing=!1,g});t.isProcessing=!1,l.row&&Object.assign(t,l.row)}if(r){const l=await this.fetch();if(this.query.items.splice(i,1),!l.query.items.length){this.params.page--,await this.load();return}this.query.items.length<l.query.items.length&&this.query.items.push(l.query.items[l.query.items.length-1])}}destroy(e,t,i){return this.action(e,{...t,remove:!0},i)}openFilter(){this.query.isFilterActive=!0}async resetFilter(e=null){Object.assign(this.params,this.structure),this.query.isFilterActive=!1,await this.load(e)}}const f=(a,e)=>{const t=a.__vccOpts||a;for(const[i,r]of e)t[i]=r;return t},B={name:"WyxosButton",props:{loading:{default:!1,type:Boolean}}},C=s.createTextVNode("Submit"),W=s.createTextVNode("Processing..."),N={key:2,class:"fas fa-spinner fa-spin"};function T(a,e,t,i,r,d){const c=s.resolveComponent("o-button");return s.openBlock(),s.createBlock(c,{disabled:t.loading},{default:s.withCtx(()=>[t.loading?s.createCommentVNode("",!0):s.renderSlot(a.$slots,"default",{key:0},()=>[C]),t.loading?s.renderSlot(a.$slots,"loading",{key:1},()=>[W]):s.createCommentVNode("",!0),t.loading?(s.openBlock(),s.createElementBlock("i",N)):s.createCommentVNode("",!0)]),_:3},8,["disabled"])}const F=f(B,[["render",T]]),E={name:"WyxosCollection",props:{modelValue:{required:!0,type:Array}},emits:["update:modelValue"],data(){return{items:[]}},mounted(){this.items=this.modelValue},methods:{add(a){this.items.push(a),this.$emit("update:modelValue",this.items)},remove(a){this.items.splice(a,1),this.$emit("update:modelValue",this.items)}}},v=s.createElementVNode("ul",null,[s.createElementVNode("li")],-1);function A(a,e,t,i,r,d){return s.renderSlot(a.$slots,"default",s.normalizeProps(s.guardReactiveProps({add:d.add,remove:d.remove,items:r.items})),()=>[v])}const P=f(E,[["render",A]]),z={name:"WyxosDatepicker",props:{modelValue:{required:!0,type:[null,String]},displayFormat:{type:String,default:"DD/MM/YYYY"},submitFormat:{type:String,default:"YYYY-MM-DD"}},emits:["update:modelValue"],data(){return{query:null}},mounted(){this.modelValue&&(this.query=_.default(this.modelValue,this.submitFormat)._d)},methods:{dateFormatter(a){return a?_.default(a).format(this.displayFormat):null},updateQuery(){this.$emit("update:modelValue",this.query?_.default(this.query).format(this.submitFormat):null)}}};function I(a,e,t,i,r,d){const c=s.resolveComponent("o-datepicker");return s.openBlock(),s.createBlock(c,{modelValue:r.query,"onUpdate:modelValue":[e[0]||(e[0]=o=>r.query=o),d.updateQuery],"date-formatter":d.dateFormatter},null,8,["modelValue","date-formatter","onUpdate:modelValue"])}const S=f(z,[["render",I]]),D={name:"WyxosForm",props:{form:{type:Object,required:!0}},emits:["submit"]},Y=s.createTextVNode(" An error occurred. Try again? ");function M(a,e,t,i,r,d){const c=s.resolveComponent("o-loading"),o=s.resolveComponent("o-button");return s.openBlock(),s.createElementBlock("div",null,[t.form.isLoaded.value?(s.openBlock(),s.createElementBlock("form",{key:0,class:"form",onSubmit:e[0]||(e[0]=s.withModifiers(l=>a.$emit("submit"),["prevent"]))},[s.renderSlot(a.$slots,"default")],32)):s.createCommentVNode("",!0),s.createVNode(c,{active:t.form.isLoading.value},null,8,["active"]),!t.form.isLoaded.value&&!t.form.isLoading.value?(s.openBlock(),s.createBlock(o,{key:1,onClick:e[1]||(e[1]=l=>t.form.load())},{default:s.withCtx(()=>[Y]),_:1})):s.createCommentVNode("",!0)])}const x=f(D,[["render",M]]),J={name:"WyxosImage",props:{src:{type:[File,String],required:!0},resize:{type:Object,default:null}},data(){return{width:0,height:0}},mounted(){this.loadImage()},methods:{loadImage(){return typeof this.src=="object"?this.loadFile():this.loadPath()},loadFile(){const a=new FileReader;a.onload=e=>{const t=e.target.result;this.$refs.image.src=t,this.width=this.resize?this.resize.width:t.width,this.height=this.resize?this.resize.height:t.height},a.readAsDataURL(this.src)},loadPath(){const a=new Image;a.onload=()=>{this.$refs.image.src=this.src,this.width=this.resize?this.resize.width:a.width,this.height=this.resize?this.resize.height:a.height},a.src=this.src}}},R=["width","height"];function U(a,e,t,i,r,d){return s.openBlock(),s.createElementBlock("img",{ref:"image",src:"",alt:"",width:r.width,height:r.height},null,8,R)}const L=f(J,[["render",U]]),Q={name:"WyxosInput",props:{label:{type:String,default:""},name:{type:String,required:!0},bag:{type:String,default:()=>"default"}},setup(){return{errors:b()}},computed:{inputAttrs(){const a=this.$attrs;return Object.keys(a).forEach(e=>{["class"].includes(e)||a[e]}),a}}};function H(a,e,t,i,r,d){const c=s.resolveComponent("o-input"),o=s.resolveComponent("o-field");return s.openBlock(),s.createBlock(o,s.mergeProps({label:t.label},i.errors.get(t.name,t.bag)),{default:s.withCtx(()=>[s.createVNode(c,s.mergeProps(a.$attrs,{onFocus:e[0]||(e[0]=l=>i.errors.clear(t.name,t.bag))}),null,16)]),_:1},16,["label"])}const k=f(Q,[["render",H]]),G={name:"WyxosTags",props:{path:{type:String,required:!0},modelValue:{type:Array,required:!0},formatter:{type:Function,required:!0},excludeFormatter:{type:Function,default:null},restoreFormatter:{type:Function,default:a=>a},payloadFormatter:{type:Function,default:a=>a}},emits:["update:modelValue"],setup(){return{search:p.create()}},data(){return{query:[]}},async mounted(){if(this.modelValue&&this.modelValue.length){const{result:a}=await this.search.restore(this.path,this.restoreFormatter({values:this.modelValue}));this.query=a,this.$emit("update:modelValue",this.query.map(e=>this.formatter(e)))}},methods:{searchTags(a){return this.search.search(this.path,this.payloadFormatter({value:a,exclude:this.query.map(e=>e.id)}))},addedTag(){const a=this.query.map(e=>this.formatter(e));console.log("r",a),this.$emit("update:modelValue",a)},removedTag(){const a=this.query.map(e=>this.formatter(e));console.log("r",a),this.$emit("update:modelValue",a)},reset(){this.query=[],this.$emit("update:modelValue",this.query)}}};function K(a,e,t,i,r,d){const c=s.resolveComponent("o-inputitems");return s.openBlock(),s.createBlock(c,s.mergeProps(a.$attrs,{modelValue:r.query,"onUpdate:modelValue":e[0]||(e[0]=o=>r.query=o),data:i.search.result.value,"open-on-focus":!0,autocomplete:"",onAdd:e[1]||(e[1]=o=>d.addedTag(o)),onRemove:e[2]||(e[2]=o=>d.removedTag(o)),onFocus:e[3]||(e[3]=o=>d.searchTags()),onTyping:e[4]||(e[4]=o=>d.searchTags(o))}),null,16,["modelValue","data"])}const O=f(G,[["render",K]]),X={AutoCompleteSearch:p,FormBuilder:q,ResourceList:V,Listing:$,useFormErrors:b,WyxosButton:F,WyxosCollection:P,WyxosDatepicker:S,WyxosForm:x,WyxosImage:L,WyxosInput:k,WyxosTags:O};n.AutoCompleteSearch=p,n.FormBuilder=q,n.Listing=$,n.ResourceList=V,n.WyxosButton=F,n.WyxosCollection=P,n.WyxosDatepicker=S,n.WyxosForm=x,n.WyxosImage=L,n.WyxosInput=k,n.WyxosTags=O,n.default=X,n.useFormErrors=b,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
