// Compiled by ClojureScript 0.0-2277
goog.provide('om_bootstrap_demo.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('om_bootstrap.dom');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('dommy.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('goog.events');
goog.require('om_bootstrap.dom');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
om_bootstrap_demo.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om_bootstrap_demo.core.nav_main = (function nav_main(app,owner){if(typeof om_bootstrap_demo.core.t7159 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7159 = (function (owner,app,nav_main,meta7160){
this.owner = owner;
this.app = app;
this.nav_main = nav_main;
this.meta7160 = meta7160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7159.cljs$lang$type = true;
om_bootstrap_demo.core.t7159.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7159";
om_bootstrap_demo.core.t7159.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7159");
});
om_bootstrap_demo.core.t7159.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7159.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_bootstrap.dom.navbar.call(null,{"toggleNavKey": (0), "role": "banner", "className": "bs-docs-nav", "staticTop": true, "brand": React.DOM.a({"className": "navbar-brand", "href": "/"},"OM Bootstrap"), "componentClass": om.dom.header},om_bootstrap.dom.nav.call(null,{"id": "top", "key": (0), "role": "navigation", "className": "bs-navbar-collapse"},React.DOM.li({"className": ((cljs.core._EQ_.call(null,"getting-started",new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_bootstrap_demo.core.app_state))))?"active":null), "key": "getting-started"},React.DOM.a({"href": "/gettings-started"},"Getting Started")),React.DOM.li({"className": ((cljs.core._EQ_.call(null,"components",new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om_bootstrap_demo.core.app_state))))?"active":null), "key": "components"},React.DOM.a({"href": "/components"},"Components"))));
});
om_bootstrap_demo.core.t7159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7161){var self__ = this;
var _7161__$1 = this;return self__.meta7160;
});
om_bootstrap_demo.core.t7159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7161,meta7160__$1){var self__ = this;
var _7161__$1 = this;return (new om_bootstrap_demo.core.t7159(self__.owner,self__.app,self__.nav_main,meta7160__$1));
});
om_bootstrap_demo.core.__GT_t7159 = (function __GT_t7159(owner__$1,app__$1,nav_main__$1,meta7160){return (new om_bootstrap_demo.core.t7159(owner__$1,app__$1,nav_main__$1,meta7160));
});
}
return (new om_bootstrap_demo.core.t7159(owner,app,nav_main,null));
});
om_bootstrap_demo.core.draw_menu_bar = (function draw_menu_bar(highlight){if(typeof highlight === 'string')
{cljs.core.swap_BANG_.call(null,om_bootstrap_demo.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight);
} else
{}
return om.core.root.call(null,om_bootstrap_demo.core.nav_main,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("header")], null));
});
var action__4496__auto___7170 = (function (params__4497__auto__){if(cljs.core.map_QMARK_.call(null,params__4497__auto__))
{var map__7162 = params__4497__auto__;var map__7162__$1 = ((cljs.core.seq_QMARK_.call(null,map__7162))?cljs.core.apply.call(null,cljs.core.hash_map,map__7162):map__7162);om_bootstrap_demo.core.draw_menu_bar.call(null,null);
return om.core.root.call(null,((function (map__7162,map__7162__$1){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7163 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7163 = (function (owner,app,map__7162,params__4497__auto__,meta7164){
this.owner = owner;
this.app = app;
this.map__7162 = map__7162;
this.params__4497__auto__ = params__4497__auto__;
this.meta7164 = meta7164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7163.cljs$lang$type = true;
om_bootstrap_demo.core.t7163.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7163";
om_bootstrap_demo.core.t7163.cljs$lang$ctorPrWriter = ((function (map__7162,map__7162__$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7163");
});})(map__7162,map__7162__$1))
;
om_bootstrap_demo.core.t7163.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7163.prototype.om$core$IRender$render$arity$1 = ((function (map__7162,map__7162__$1){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.main({"role": "main", "id": "content", "className": "bs-docs-masthead"},React.DOM.div({"className": "container"},React.DOM.span({"className": "bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"}),React.DOM.p({"className": "lead"},"The most popular front-end framework, rebuilt for OM")));
});})(map__7162,map__7162__$1))
;
om_bootstrap_demo.core.t7163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7162,map__7162__$1){
return (function (_7165){var self__ = this;
var _7165__$1 = this;return self__.meta7164;
});})(map__7162,map__7162__$1))
;
om_bootstrap_demo.core.t7163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7162,map__7162__$1){
return (function (_7165,meta7164__$1){var self__ = this;
var _7165__$1 = this;return (new om_bootstrap_demo.core.t7163(self__.owner,self__.app,self__.map__7162,self__.params__4497__auto__,meta7164__$1));
});})(map__7162,map__7162__$1))
;
om_bootstrap_demo.core.__GT_t7163 = ((function (map__7162,map__7162__$1){
return (function __GT_t7163(owner__$1,app__$1,map__7162__$2,params__4497__auto____$1,meta7164){return (new om_bootstrap_demo.core.t7163(owner__$1,app__$1,map__7162__$2,params__4497__auto____$1,meta7164));
});})(map__7162,map__7162__$1))
;
}
return (new om_bootstrap_demo.core.t7163(owner,app,map__7162__$1,params__4497__auto__,null));
});})(map__7162,map__7162__$1))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4497__auto__))
{var vec__7166 = params__4497__auto__;om_bootstrap_demo.core.draw_menu_bar.call(null,null);
return om.core.root.call(null,((function (vec__7166){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7167 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7167 = (function (owner,app,vec__7166,params__4497__auto__,meta7168){
this.owner = owner;
this.app = app;
this.vec__7166 = vec__7166;
this.params__4497__auto__ = params__4497__auto__;
this.meta7168 = meta7168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7167.cljs$lang$type = true;
om_bootstrap_demo.core.t7167.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7167";
om_bootstrap_demo.core.t7167.cljs$lang$ctorPrWriter = ((function (vec__7166){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7167");
});})(vec__7166))
;
om_bootstrap_demo.core.t7167.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7167.prototype.om$core$IRender$render$arity$1 = ((function (vec__7166){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.main({"role": "main", "id": "content", "className": "bs-docs-masthead"},React.DOM.div({"className": "container"},React.DOM.span({"className": "bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"}),React.DOM.p({"className": "lead"},"The most popular front-end framework, rebuilt for OM")));
});})(vec__7166))
;
om_bootstrap_demo.core.t7167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7166){
return (function (_7169){var self__ = this;
var _7169__$1 = this;return self__.meta7168;
});})(vec__7166))
;
om_bootstrap_demo.core.t7167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7166){
return (function (_7169,meta7168__$1){var self__ = this;
var _7169__$1 = this;return (new om_bootstrap_demo.core.t7167(self__.owner,self__.app,self__.vec__7166,self__.params__4497__auto__,meta7168__$1));
});})(vec__7166))
;
om_bootstrap_demo.core.__GT_t7167 = ((function (vec__7166){
return (function __GT_t7167(owner__$1,app__$1,vec__7166__$1,params__4497__auto____$1,meta7168){return (new om_bootstrap_demo.core.t7167(owner__$1,app__$1,vec__7166__$1,params__4497__auto____$1,meta7168));
});})(vec__7166))
;
}
return (new om_bootstrap_demo.core.t7167(owner,app,vec__7166,params__4497__auto__,null));
});})(vec__7166))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4496__auto___7170);
/**
* @param {...*} var_args
*/
om_bootstrap_demo.core.root = ((function (action__4496__auto___7170){
return (function() { 
var root__delegate = function (args__4495__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__4495__auto__);
};
var root = function (var_args){
var args__4495__auto__ = null;if (arguments.length > 0) {
  args__4495__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return root__delegate.call(this,args__4495__auto__);};
root.cljs$lang$maxFixedArity = 0;
root.cljs$lang$applyTo = (function (arglist__7171){
var args__4495__auto__ = cljs.core.seq(arglist__7171);
return root__delegate(args__4495__auto__);
});
root.cljs$core$IFn$_invoke$arity$variadic = root__delegate;
return root;
})()
;})(action__4496__auto___7170))
;
var action__4496__auto___7180 = (function (params__4497__auto__){if(cljs.core.map_QMARK_.call(null,params__4497__auto__))
{var map__7172 = params__4497__auto__;var map__7172__$1 = ((cljs.core.seq_QMARK_.call(null,map__7172))?cljs.core.apply.call(null,cljs.core.hash_map,map__7172):map__7172);cljs.core.println.call(null,"why why?");
om_bootstrap_demo.core.draw_menu_bar.call(null,"getting-started");
return om.core.root.call(null,((function (map__7172,map__7172__$1){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7173 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7173 = (function (owner,app,map__7172,params__4497__auto__,meta7174){
this.owner = owner;
this.app = app;
this.map__7172 = map__7172;
this.params__4497__auto__ = params__4497__auto__;
this.meta7174 = meta7174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7173.cljs$lang$type = true;
om_bootstrap_demo.core.t7173.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7173";
om_bootstrap_demo.core.t7173.cljs$lang$ctorPrWriter = ((function (map__7172,map__7172__$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7173");
});})(map__7172,map__7172__$1))
;
om_bootstrap_demo.core.t7173.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7173.prototype.om$core$IRender$render$arity$1 = ((function (map__7172,map__7172__$1){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"notwhere to start");
});})(map__7172,map__7172__$1))
;
om_bootstrap_demo.core.t7173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7172,map__7172__$1){
return (function (_7175){var self__ = this;
var _7175__$1 = this;return self__.meta7174;
});})(map__7172,map__7172__$1))
;
om_bootstrap_demo.core.t7173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7172,map__7172__$1){
return (function (_7175,meta7174__$1){var self__ = this;
var _7175__$1 = this;return (new om_bootstrap_demo.core.t7173(self__.owner,self__.app,self__.map__7172,self__.params__4497__auto__,meta7174__$1));
});})(map__7172,map__7172__$1))
;
om_bootstrap_demo.core.__GT_t7173 = ((function (map__7172,map__7172__$1){
return (function __GT_t7173(owner__$1,app__$1,map__7172__$2,params__4497__auto____$1,meta7174){return (new om_bootstrap_demo.core.t7173(owner__$1,app__$1,map__7172__$2,params__4497__auto____$1,meta7174));
});})(map__7172,map__7172__$1))
;
}
return (new om_bootstrap_demo.core.t7173(owner,app,map__7172__$1,params__4497__auto__,null));
});})(map__7172,map__7172__$1))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4497__auto__))
{var vec__7176 = params__4497__auto__;cljs.core.println.call(null,"why why?");
om_bootstrap_demo.core.draw_menu_bar.call(null,"getting-started");
return om.core.root.call(null,((function (vec__7176){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7177 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7177 = (function (owner,app,vec__7176,params__4497__auto__,meta7178){
this.owner = owner;
this.app = app;
this.vec__7176 = vec__7176;
this.params__4497__auto__ = params__4497__auto__;
this.meta7178 = meta7178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7177.cljs$lang$type = true;
om_bootstrap_demo.core.t7177.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7177";
om_bootstrap_demo.core.t7177.cljs$lang$ctorPrWriter = ((function (vec__7176){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7177");
});})(vec__7176))
;
om_bootstrap_demo.core.t7177.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7177.prototype.om$core$IRender$render$arity$1 = ((function (vec__7176){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"notwhere to start");
});})(vec__7176))
;
om_bootstrap_demo.core.t7177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7176){
return (function (_7179){var self__ = this;
var _7179__$1 = this;return self__.meta7178;
});})(vec__7176))
;
om_bootstrap_demo.core.t7177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7176){
return (function (_7179,meta7178__$1){var self__ = this;
var _7179__$1 = this;return (new om_bootstrap_demo.core.t7177(self__.owner,self__.app,self__.vec__7176,self__.params__4497__auto__,meta7178__$1));
});})(vec__7176))
;
om_bootstrap_demo.core.__GT_t7177 = ((function (vec__7176){
return (function __GT_t7177(owner__$1,app__$1,vec__7176__$1,params__4497__auto____$1,meta7178){return (new om_bootstrap_demo.core.t7177(owner__$1,app__$1,vec__7176__$1,params__4497__auto____$1,meta7178));
});})(vec__7176))
;
}
return (new om_bootstrap_demo.core.t7177(owner,app,vec__7176,params__4497__auto__,null));
});})(vec__7176))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/getting-started",action__4496__auto___7180);
/**
* @param {...*} var_args
*/
om_bootstrap_demo.core.getting_started = ((function (action__4496__auto___7180){
return (function() { 
var getting_started__delegate = function (args__4495__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/getting-started",args__4495__auto__);
};
var getting_started = function (var_args){
var args__4495__auto__ = null;if (arguments.length > 0) {
  args__4495__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return getting_started__delegate.call(this,args__4495__auto__);};
getting_started.cljs$lang$maxFixedArity = 0;
getting_started.cljs$lang$applyTo = (function (arglist__7181){
var args__4495__auto__ = cljs.core.seq(arglist__7181);
return getting_started__delegate(args__4495__auto__);
});
getting_started.cljs$core$IFn$_invoke$arity$variadic = getting_started__delegate;
return getting_started;
})()
;})(action__4496__auto___7180))
;
var action__4496__auto___7190 = (function (params__4497__auto__){if(cljs.core.map_QMARK_.call(null,params__4497__auto__))
{var map__7182 = params__4497__auto__;var map__7182__$1 = ((cljs.core.seq_QMARK_.call(null,map__7182))?cljs.core.apply.call(null,cljs.core.hash_map,map__7182):map__7182);cljs.core.println.call(null,"wanker");
om_bootstrap_demo.core.draw_menu_bar.call(null,"components");
return om.core.root.call(null,((function (map__7182,map__7182__$1){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7183 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7183 = (function (owner,app,map__7182,params__4497__auto__,meta7184){
this.owner = owner;
this.app = app;
this.map__7182 = map__7182;
this.params__4497__auto__ = params__4497__auto__;
this.meta7184 = meta7184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7183.cljs$lang$type = true;
om_bootstrap_demo.core.t7183.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7183";
om_bootstrap_demo.core.t7183.cljs$lang$ctorPrWriter = ((function (map__7182,map__7182__$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7183");
});})(map__7182,map__7182__$1))
;
om_bootstrap_demo.core.t7183.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7183.prototype.om$core$IRender$render$arity$1 = ((function (map__7182,map__7182__$1){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"golfwang");
});})(map__7182,map__7182__$1))
;
om_bootstrap_demo.core.t7183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7182,map__7182__$1){
return (function (_7185){var self__ = this;
var _7185__$1 = this;return self__.meta7184;
});})(map__7182,map__7182__$1))
;
om_bootstrap_demo.core.t7183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7182,map__7182__$1){
return (function (_7185,meta7184__$1){var self__ = this;
var _7185__$1 = this;return (new om_bootstrap_demo.core.t7183(self__.owner,self__.app,self__.map__7182,self__.params__4497__auto__,meta7184__$1));
});})(map__7182,map__7182__$1))
;
om_bootstrap_demo.core.__GT_t7183 = ((function (map__7182,map__7182__$1){
return (function __GT_t7183(owner__$1,app__$1,map__7182__$2,params__4497__auto____$1,meta7184){return (new om_bootstrap_demo.core.t7183(owner__$1,app__$1,map__7182__$2,params__4497__auto____$1,meta7184));
});})(map__7182,map__7182__$1))
;
}
return (new om_bootstrap_demo.core.t7183(owner,app,map__7182__$1,params__4497__auto__,null));
});})(map__7182,map__7182__$1))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4497__auto__))
{var vec__7186 = params__4497__auto__;cljs.core.println.call(null,"wanker");
om_bootstrap_demo.core.draw_menu_bar.call(null,"components");
return om.core.root.call(null,((function (vec__7186){
return (function (app,owner){if(typeof om_bootstrap_demo.core.t7187 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7187 = (function (owner,app,vec__7186,params__4497__auto__,meta7188){
this.owner = owner;
this.app = app;
this.vec__7186 = vec__7186;
this.params__4497__auto__ = params__4497__auto__;
this.meta7188 = meta7188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7187.cljs$lang$type = true;
om_bootstrap_demo.core.t7187.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7187";
om_bootstrap_demo.core.t7187.cljs$lang$ctorPrWriter = ((function (vec__7186){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7187");
});})(vec__7186))
;
om_bootstrap_demo.core.t7187.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7187.prototype.om$core$IRender$render$arity$1 = ((function (vec__7186){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"golfwang");
});})(vec__7186))
;
om_bootstrap_demo.core.t7187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7186){
return (function (_7189){var self__ = this;
var _7189__$1 = this;return self__.meta7188;
});})(vec__7186))
;
om_bootstrap_demo.core.t7187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7186){
return (function (_7189,meta7188__$1){var self__ = this;
var _7189__$1 = this;return (new om_bootstrap_demo.core.t7187(self__.owner,self__.app,self__.vec__7186,self__.params__4497__auto__,meta7188__$1));
});})(vec__7186))
;
om_bootstrap_demo.core.__GT_t7187 = ((function (vec__7186){
return (function __GT_t7187(owner__$1,app__$1,vec__7186__$1,params__4497__auto____$1,meta7188){return (new om_bootstrap_demo.core.t7187(owner__$1,app__$1,vec__7186__$1,params__4497__auto____$1,meta7188));
});})(vec__7186))
;
}
return (new om_bootstrap_demo.core.t7187(owner,app,vec__7186,params__4497__auto__,null));
});})(vec__7186))
,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/components",action__4496__auto___7190);
/**
* @param {...*} var_args
*/
om_bootstrap_demo.core.components = ((function (action__4496__auto___7190){
return (function() { 
var components__delegate = function (args__4495__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/components",args__4495__auto__);
};
var components = function (var_args){
var args__4495__auto__ = null;if (arguments.length > 0) {
  args__4495__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return components__delegate.call(this,args__4495__auto__);};
components.cljs$lang$maxFixedArity = 0;
components.cljs$lang$applyTo = (function (arglist__7191){
var args__4495__auto__ = cljs.core.seq(arglist__7191);
return components__delegate(args__4495__auto__);
});
components.cljs$core$IFn$_invoke$arity$variadic = components__delegate;
return components;
})()
;})(action__4496__auto___7190))
;
cljs.core.println.call(null,"problems?");
secretary.core.dispatch_BANG_.call(null,"/");

//# sourceMappingURL=core.js.map