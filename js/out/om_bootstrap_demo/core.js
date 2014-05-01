// Compiled by ClojureScript 0.0-2173
goog.provide('om_bootstrap_demo.core');
goog.require('cljs.core');
goog.require('om_bootstrap.dom');
goog.require('om_bootstrap.dom');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_bootstrap_demo.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_bootstrap_demo.core.json_xhr = (function json_xhr(p__5675){var map__5677 = p__5675;var map__5677__$1 = ((cljs.core.seq_QMARK_.call(null,map__5677))?cljs.core.apply.call(null,cljs.core.hash_map,map__5677):map__5677);var on_complete = cljs.core.get.call(null,map__5677__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__5677__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__5677__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__5677__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new gnet.xhr_connection());gevent.listen.call(null,xhr,new cljs.core.Keyword(null,"success","success",3441701749),(function (e){return on_complete.call(null,xhr.getResponseText());
}));
return gnet.transmit.call(null,xhr,url,om_bootstrap_demo.core.meths.call(null,method),data);
});
om_bootstrap_demo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",1124036352),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"get milk"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"grate cheese"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),"wash dishes"], null)], null)], null));
om.core.root.call(null,(function (app,owner){if(typeof om_bootstrap_demo.core.t5678 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t5678 = (function (owner,app,meta5679){
this.owner = owner;
this.app = app;
this.meta5679 = meta5679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t5678.cljs$lang$type = true;
om_bootstrap_demo.core.t5678.cljs$lang$ctorStr = "om-bootstrap-demo.core/t5678";
om_bootstrap_demo.core.t5678.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-bootstrap-demo.core/t5678");
});
om_bootstrap_demo.core.t5678.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t5678.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "row-fluid"},React.DOM.form({"className": "form well"},React.DOM.div({"className": "row-fluid"},om.dom.input.call(null,{"id": "in-it", "className": "input-block-level"}),om_bootstrap.dom.button_group.call(null,null,om_bootstrap.dom.button.call(null,{"onClick": (function (){return om_bootstrap_demo.core.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),[cljs.core.str("http://localhost:3000/tasks")].join(''),new cljs.core.Keyword(null,"data","data",1016980252),[cljs.core.str("name="),cljs.core.str(document.getElementById("in-it").value)].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.println.call(null,"response: ",res);
})], null));
}), "bsSize": "small", "bsStyle": "primary"},"submit"),om_bootstrap.dom.button.call(null,{"onClick": (function (){return om_bootstrap_demo.core.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),[cljs.core.str("http://localhost:3000/tasks")].join(''),new cljs.core.Keyword(null,"data","data",1016980252),[cljs.core.str("name="),cljs.core.str(document.getElementById("in-it").value)].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return cljs.core.println.call(null,"response: ",res);
})], null));
}), "bsSize": "small", "bsStyle": "danger"},"cancel")))));
});
om_bootstrap_demo.core.t5678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5680){var self__ = this;
var _5680__$1 = this;return self__.meta5679;
});
om_bootstrap_demo.core.t5678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5680,meta5679__$1){var self__ = this;
var _5680__$1 = this;return (new om_bootstrap_demo.core.t5678(self__.owner,self__.app,meta5679__$1));
});
om_bootstrap_demo.core.__GT_t5678 = (function __GT_t5678(owner__$1,app__$1,meta5679){return (new om_bootstrap_demo.core.t5678(owner__$1,app__$1,meta5679));
});
}
return (new om_bootstrap_demo.core.t5678(owner,app,null));
}),om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("entry")], null));
om_bootstrap_demo.core.task_view = (function task_view(task,owner){cljs.core.println.call(null,"yolo: ",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(task));
if(typeof om_bootstrap_demo.core.t5684 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t5684 = (function (owner,task,task_view,meta5685){
this.owner = owner;
this.task = task;
this.task_view = task_view;
this.meta5685 = meta5685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t5684.cljs$lang$type = true;
om_bootstrap_demo.core.t5684.cljs$lang$ctorStr = "om-bootstrap-demo.core/t5684";
om_bootstrap_demo.core.t5684.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-bootstrap-demo.core/t5684");
});
om_bootstrap_demo.core.t5684.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t5684.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "well"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.task));
});
om_bootstrap_demo.core.t5684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5686){var self__ = this;
var _5686__$1 = this;return self__.meta5685;
});
om_bootstrap_demo.core.t5684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5686,meta5685__$1){var self__ = this;
var _5686__$1 = this;return (new om_bootstrap_demo.core.t5684(self__.owner,self__.task,self__.task_view,meta5685__$1));
});
om_bootstrap_demo.core.__GT_t5684 = (function __GT_t5684(owner__$1,task__$1,task_view__$1,meta5685){return (new om_bootstrap_demo.core.t5684(owner__$1,task__$1,task_view__$1,meta5685));
});
}
return (new om_bootstrap_demo.core.t5684(owner,task,task_view,null));
});
om_bootstrap_demo.core.task_list = (function task_list(app,owner){if(typeof om_bootstrap_demo.core.t5692 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t5692 = (function (owner,app,task_list,meta5693){
this.owner = owner;
this.app = app;
this.task_list = task_list;
this.meta5693 = meta5693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t5692.cljs$lang$type = true;
om_bootstrap_demo.core.t5692.cljs$lang$ctorStr = "om-bootstrap-demo.core/t5692";
om_bootstrap_demo.core.t5692.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-bootstrap-demo.core/t5692");
});
om_bootstrap_demo.core.t5692.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t5692.prototype.om$core$IRender$render$arity$2 = (function (this$,p__5695){var self__ = this;
var map__5696 = p__5695;var map__5696__$1 = ((cljs.core.seq_QMARK_.call(null,map__5696))?cljs.core.apply.call(null,cljs.core.hash_map,map__5696):map__5696);var editing = cljs.core.get.call(null,map__5696__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var this$__$1 = this;return React.DOM.div({"id": "tasks"},React.DOM.h2(null,"Tasks"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_bootstrap_demo.core.task_view,new cljs.core.Keyword(null,"tasks","tasks",1124036352).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
om_bootstrap_demo.core.t5692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5694){var self__ = this;
var _5694__$1 = this;return self__.meta5693;
});
om_bootstrap_demo.core.t5692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5694,meta5693__$1){var self__ = this;
var _5694__$1 = this;return (new om_bootstrap_demo.core.t5692(self__.owner,self__.app,self__.task_list,meta5693__$1));
});
om_bootstrap_demo.core.__GT_t5692 = (function __GT_t5692(owner__$1,app__$1,task_list__$1,meta5693){return (new om_bootstrap_demo.core.t5692(owner__$1,app__$1,task_list__$1,meta5693));
});
}
return (new om_bootstrap_demo.core.t5692(owner,app,task_list,null));
});
om.core.root.call(null,om_bootstrap_demo.core.task_list,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("tasks")], null));

//# sourceMappingURL=core.js.map