(function(t){function e(e){for(var r,i,a=e[0],u=e[1],c=e[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-news/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"1a44":function(t,e,n){},"312d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tool-bar"),n("transition",{attrs:{name:"page"}},[n("router-view")],1),n("Spinner",{attrs:{loading:t.loadingStatus}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/vue-news/news"}},[t._v("News")]),t._v(" | "),n("router-link",{attrs:{to:"/vue-news/ask"}},[t._v("Ask")]),t._v(" | "),n("router-link",{attrs:{to:"/vue-news/jobs"}},[t._v("Jobs")])],1)},a=[],u={},c=u,l=(n("8d98"),n("2877")),f=Object(l["a"])(c,i,a,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")]):t._e()},m=[],v={props:{loading:{type:Boolean,required:!0}}},_=v,h=(n("90bf"),Object(l["a"])(_,d,m,!1,null,"6bd91704",null)),b=h.exports,w=new r["a"],E={name:"App",components:{"tool-bar":p,Spinner:b},data:function(){return{loadingStatus:!1}},methods:{startSpinner:function(){this.loadingStatus=!0},endSpinner:function(){this.loadingStatus=!1}},created:function(){w.$on("start:spinner",this.startSpinner),w.$on("end:spinner",this.endSpinner)},beforeDestroy:function(){w.$off("start:spinner",this.startSpinner),w.$off("end:spinner",this.endSpinner)}},S=E,g=(n("034f"),Object(l["a"])(S,s,o,!1,null,null,null)),j=g.exports,$=(n("b0c0"),n("8c4f")),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},T=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"news-list"},t._l(t.listItems,(function(e,r){return n("li",{key:r,staticClass:"post"},[n("div",{staticClass:"points"},[t._v(t._s(e.points||r))]),n("div",[e.domain?[n("p",{staticClass:"list-title"},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])]:[n("p",{staticClass:"list-title"},[n("a",{attrs:{href:e.url}},[n("router-link",{attrs:{to:"/vue-news/item/"+e.id}},[t._v(" "+t._s(e.title)+" ")])],1)])],n("small",{staticClass:"link-text"},[t._v(" "+t._s(e.time_ago)+" by "),e.user?n("router-link",{staticClass:"link-text",attrs:{to:"/vue-news/user/"+e.user}},[t._v(t._s(e.user))]):n("a",{attrs:{href:e.url}},[t._v(t._s(e.domain))])],1)],2)])})),0)},x=[],y={computed:{listItems:function(){return this.$store.state.list}}},O=y,C=(n("bef3"),Object(l["a"])(O,k,x,!1,null,"796f7752",null)),U=C.exports,P={created:function(){w.$emit("end:spinner")}},M={components:{ListItem:U},mixins:[P]},L=M,H=Object(l["a"])(L,I,T,!1,null,null,null),F=H.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},R=[],A={components:{ListItem:U},mixins:[P]},N=A,q=Object(l["a"])(N,J,R,!1,null,null,null),B=q.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},z=[],G={components:{ListItem:U},mixins:[P]},K=G,Q=Object(l["a"])(K,D,z,!1,null,null,null),V=Q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("user-profile",[n("div",{attrs:{slot:"username"},slot:"username"},[n("router-link",{attrs:{to:"/vue-news/user/"+t.itemInfo.user}},[t._v(" "+t._s(t.itemInfo.user)+" ")])],1),n("template",{slot:"time"},[t._v(t._s("poted "+t.itemInfo.time_ago))])],2),n("h2",[t._v(t._s(t.itemInfo.title))])],1),n("section",[n("div",{domProps:{innerHTML:t._s(t.itemInfo.content)}})])])},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-container"},[t._m(0),n("div",{staticClass:"user-discription"},[t._t("username"),n("div",{staticClass:"time"},[t._t("time")],2),t._t("karma")],2)])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-user"})])}],tt={props:{userInfo:Object}},et=tt,nt=(n("89a5"),Object(l["a"])(et,Y,Z,!1,null,"7e726951",null)),rt=nt.exports,st={components:{UserProfile:rt},computed:{itemInfo:function(){return this.$store.state.item}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)},mixins:[P]},ot=st,it=Object(l["a"])(ot,W,X,!1,null,"af093874",null),at=it.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("user-profile",[n("div",{attrs:{slot:"username"},slot:"username"},[t._v(t._s(t.userInfo.id))]),n("span",{attrs:{slot:"time"},slot:"time"},[t._v(t._s("joined "+t.userInfo.created)+",")]),n("span",{attrs:{slot:"karma"},slot:"karma"},[t._v(t._s(t.userInfo.karma))])])],1)},ct=[],lt={components:{UserProfile:rt},computed:{userInfo:function(){return this.$store.state.user}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_USER",t)},mixins:[P]},ft=lt,pt=Object(l["a"])(ft,ut,ct,!1,null,null,null),dt=pt.exports,mt=n("2f62"),vt={SET_USER:function(t,e){t.user=e},SET_ITEM:function(t,e){t.item=e},SET_LIST:function(t,e){t.list=e}},_t=(n("99af"),n("bc3a")),ht=n.n(_t),bt={baseUrl:"https://api.hnpwa.com/v0/"};function wt(t){return ht.a.get("".concat(bt.baseUrl,"user/").concat(t,".json"))}function Et(t){return ht.a.get("".concat(bt.baseUrl,"item/").concat(t,".json"))}function St(t){return ht.a.get("".concat(bt.baseUrl).concat(t,"/1.json"))}var gt={FETCH_USER:function(t,e){var n=t.commit;return wt(e).then((function(t){var e=t.data;n("SET_USER",e)})).catch((function(t){console.log(t)}))},FETCH_ITEM:function(t,e){var n=t.commit;return Et(e).then((function(t){var e=t.data;n("SET_ITEM",e)})).catch((function(t){console.log(t)}))},FETCH_LIST:function(t,e){var n=t.commit;return St(e).then((function(t){var e=t.data;n("SET_LIST",e)})).catch((function(t){console.log(t)}))}};r["a"].use(mt["a"]);var jt=new mt["a"].Store({state:{user:{},item:{},list:[]},mutations:vt,actions:gt,getters:{fetchedAsk:function(t){return t.ask},fetchedNews:function(t){return t.news},fetchedJobs:function(t){return t.jobs},fetchedUser:function(t){return t.user}}});r["a"].use($["a"]);var $t=new $["a"]({mode:"history",routes:[{path:"/vue-news",redirect:"/vue-news/news"},{path:"/vue-news/news",component:F,name:"news"},{path:"/vue-news/ask",component:B,name:"ask"},{path:"/vue-news/jobs",component:V,name:"jobs"},{path:"/vue-news/item/:id",component:at},{path:"/vue-news/user/:id",component:dt}]});$t.beforeEach((function(t,e,n){console.log(t.name),w.$emit("start:spinner"),jt.dispatch("FETCH_LIST",t.name).then((function(){n()})).catch((function(t){console.log(t)}))})),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)},router:$t,store:jt}).$mount("#app")},"85ec":function(t,e,n){},"89a5":function(t,e,n){"use strict";var r=n("312d"),s=n.n(r);s.a},"8d98":function(t,e,n){"use strict";var r=n("dd39"),s=n.n(r);s.a},"90bf":function(t,e,n){"use strict";var r=n("1a44"),s=n.n(r);s.a},bc68:function(t,e,n){},bef3:function(t,e,n){"use strict";var r=n("bc68"),s=n.n(r);s.a},dd39:function(t,e,n){}});
//# sourceMappingURL=app.f17ffcbf.js.map