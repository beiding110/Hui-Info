webpackJsonp([4],{"1tbp":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Y+QM"),i=a("aCut"),o={components:{list:l.a},data:function(){return{KeyName:"",CityCode:"",HyCode:"",JdCode:"",CityData:[],HyData:[],JdData:[]}},computed:{extraForm:function(){return{KeyName:this.KeyName,CityCode:this.CityCode,HyCode:this.HyCode,JdCode:this.JdCode}}},methods:{quertData:function(){this.$refs.list.reload()}},mounted:function(){i.a.call(this)}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("search-bar",{on:{search:t.quertData},model:{value:t.KeyName,callback:function(e){t.KeyName=e},expression:"KeyName"}}),t._v(" "),a("div",{staticClass:"weui-flex w-sel-search"},[a("div",{staticClass:"weui-flex__item sel-btn__flex"},[a("btn-picker",{attrs:{placeholder:"地区",data:t.CityData},on:{select:t.quertData},model:{value:t.CityCode,callback:function(e){t.CityCode=e},expression:"CityCode"}})],1),t._v(" "),a("div",{staticClass:"weui-flex__item sel-btn__flex"},[a("btn-picker",{attrs:{placeholder:"行业",data:t.HyData},on:{select:t.quertData},model:{value:t.HyCode,callback:function(e){t.HyCode=e},expression:"HyCode"}})],1),t._v(" "),a("div",{staticClass:"weui-flex__item sel-btn__flex"},[a("btn-picker",{attrs:{placeholder:"阶段",data:t.JdData},on:{select:t.quertData},model:{value:t.JdCode,callback:function(e){t.JdCode=e},expression:"JdCode"}})],1)]),t._v(" "),a("div",{staticClass:"page-content",staticStyle:{top:"88px"}},[a("list",{ref:"list",attrs:{extra:t.extraForm}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,r,!1,function(t){a("nBdI")},"data-v-55d5d332",null);e.default=s.exports},"2tsV":function(t,e,a){"use strict";var l={props:{value:{type:Boolean,default:!1},guid:{type:String,default:""}},data:function(){return{}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{tapHandler:function(){var t=this;this.$get("/Api/Collection/SetCollectState",{id:this.guid},function(e){t.model=!t.model,t.$store.commit("setState",{collectSign:!0})})}},mounted:function(){}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("fixed-btn",{class:this.value?"collected":"collect",attrs:{iconfont:this.value?"&#xe606;":"&#xe607;"},on:{click:this.tapHandler}})},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(t){a("6oTe")},"data-v-1713cfa2",null);e.a=o.exports},"6oTe":function(t,e){},cBQn:function(t,e){},nBdI:function(t,e){},sT3T:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={props:["value"],components:{collectStar:a("2tsV").a},data:function(){return{detail:{},labelWidth:"80px"}},computed:{collect:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{queryData:function(){var t=this,e=this.$route.params.guid,a=this.$route.params.type;this.$get("/Api/Project/GetDetail",{id:e,type:a},function(e){t.detail=e||{},t.collect=t.detail.Collection})},timeFormatter:function(t){return/ /.test(t)?t.split(" ")[0]:t}},mounted:function(){this.queryData()},activated:function(){this.queryData()},deactivated:function(){this.detail={},this.$emit("input",void 0)},beforeDestroy:function(){this.detail={},this.$emit("input",void 0)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("w-card",{staticClass:"info--card"},[a("div",{staticClass:"weui-form-preview"},[a("div",{staticClass:"weui-form-preview__hd"},[a("h1",{staticClass:"weui-form-preview__value"},[t._v(t._s(t.detail.Title))]),t._v(" "),a("font",{staticClass:"weui-form-preview__value addtime"},[t._v(t._s(t.timeFormatter(t.detail.AddTime)))])],1),t._v(" "),a("div",{staticClass:"weui-form-preview__bd"},[a("table-con",{attrs:{data:t.detail}},[a("table-row",{attrs:{label:"项目编号",prop:"ProCode","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"项目名称",prop:"ProName","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"进展阶段",prop:"JdName","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"建设性质",prop:"JsXzName","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"所属行业",prop:"SsHyName","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"所属地区",prop:"CityName","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"建设周期",prop:"E_JsZq","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"投资总额",prop:"TzZe","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"资金来源",prop:"ZjLy","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"主要设备",prop:"ZySb","label-width":t.labelWidth}})],1)],1)])]),t._v(" "),a("w-card",{staticClass:"info--card"},[a("div",{staticClass:"weui-panel"},[a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"weui-media-box weui-media-box_text"},[a("h4",{staticClass:"weui-media-box__title"},[t._v("项目内容")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.detail.Content)}})])])])]),t._v(" "),a("w-card",{staticClass:"info--card"},[a("div",{staticClass:"weui-form-preview"},[a("div",{staticClass:"weui-form-preview__bd"},[a("table-con",{attrs:{data:t.detail}},[a("table-row",{attrs:{label:"建设单位",prop:"JsDw","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"审批文号",prop:"HzWh","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"审批机关",prop:"HzBm","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"建设地址",prop:"JsAddress","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"项目负责人",prop:"XmFzr","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"咨询电话",prop:"ZxDh","label-width":t.labelWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"tel:"+e.row}},[t._v(t._s(e.row))])]}}])}),t._v(" "),a("table-row",{attrs:{label:"移动电话",prop:"Phone","label-width":t.labelWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"tel:"+e.row}},[t._v(t._s(e.row))])]}}])}),t._v(" "),a("table-row",{attrs:{label:"电子邮件",prop:"Email","label-width":t.labelWidth}}),t._v(" "),a("table-row",{attrs:{label:"传真",prop:"CzHm","label-width":t.labelWidth}})],1)],1)])]),t._v(" "),a("collect-star",{attrs:{guid:t.detail.RowGuid},model:{value:t.detail.Collection,callback:function(e){t.$set(t.detail,"Collection",e)},expression:"detail.Collection"}})],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(t){a("cBQn")},"data-v-ea6d174a",null);e.default=o.exports}});
//# sourceMappingURL=4.f605748dde5e90973a41.js.map