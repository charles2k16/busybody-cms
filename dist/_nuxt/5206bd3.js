(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{436:function(t,e,l){"use strict";l.r(e);var n=l(11),r=(l(62),l(0).default.extend({name:"Clients",data:function(){return{search:"",facilitiesData:[],tableLoading:!0}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$facilitiesApi.index();case 3:l=e.sent,t.facilitiesData=l.data,t.tableLoading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{}})),o=l(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("ApplicationHandler",{ref:"handleAction"}),t._v(" "),l("el-row",{staticClass:"mb-2 mt-40",attrs:{gutter:10}},[l("el-col",{attrs:{sm:21,md:21}},[l("div",{staticClass:"d-flex"},[l("el-input",{staticClass:"search_input_width",attrs:{placeholder:"Search Facilities"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"}),t._v(" "),l("el-button",{attrs:{slot:"append",icon:"el-icon-sort"},slot:"append"})],1)],1)]),t._v(" "),l("el-col",{attrs:{sm:3,md:3}},[l("el-button",{attrs:{icon:"el-icon-plus",type:"primary"}},[t._v("\n        Add a Facility\n      ")])],1)],1),t._v(" "),l("el-card",{staticClass:"mt-40"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.facilitiesData,stripe:""}},[l("el-table-column",{attrs:{prop:"name",label:"Name"}}),t._v(" "),l("el-table-column",{attrs:{prop:"description",label:"Description",width:"400"}}),t._v(" "),l("el-table-column",{attrs:{label:"Bookable",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-tag",{attrs:{type:!1===e.row.bookable?"danger":"info",size:"small"}},[l("b",[t._v(" "+t._s(!1===e.row.bookable?"No":"Yes"))])])]}}])}),t._v(" "),l("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"default",fn:function(){return[l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Edit Facility",placement:"top"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}})],1),t._v(" "),l("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})]},proxy:!0}])})],1)],1),t._v(" "),l("div",{staticClass:"mt-40 center pb-10"},[l("el-pagination",{attrs:{background:"","page-sizes":[15,30,50],"page-size":15,layout:"prev, pager, next, sizes, total",total:10}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);