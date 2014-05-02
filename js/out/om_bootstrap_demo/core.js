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
om_bootstrap_demo.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om_bootstrap_demo.core.nav_header = (function nav_header(app,owner){if(typeof om_bootstrap_demo.core.t5750 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t5750 = (function (owner,app,nav_header,meta5751){
this.owner = owner;
this.app = app;
this.nav_header = nav_header;
this.meta5751 = meta5751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t5750.cljs$lang$type = true;
om_bootstrap_demo.core.t5750.cljs$lang$ctorStr = "om-bootstrap-demo.core/t5750";
om_bootstrap_demo.core.t5750.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-bootstrap-demo.core/t5750");
});
om_bootstrap_demo.core.t5750.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t5750.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "container"},om_bootstrap.dom.nav.call(null,{"className": "collapse navbar-collapse bs-navbar-collapse", "bsStyle": "tabs"},om_bootstrap.dom.nav_item.call(null,null,"Om Bootstrap"),om_bootstrap.dom.nav_item.call(null,null,"Getting started"),om_bootstrap.dom.nav_item.call(null,null,"Components")));
});
om_bootstrap_demo.core.t5750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5752){var self__ = this;
var _5752__$1 = this;return self__.meta5751;
});
om_bootstrap_demo.core.t5750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5752,meta5751__$1){var self__ = this;
var _5752__$1 = this;return (new om_bootstrap_demo.core.t5750(self__.owner,self__.app,self__.nav_header,meta5751__$1));
});
om_bootstrap_demo.core.__GT_t5750 = (function __GT_t5750(owner__$1,app__$1,nav_header__$1,meta5751){return (new om_bootstrap_demo.core.t5750(owner__$1,app__$1,nav_header__$1,meta5751));
});
}
return (new om_bootstrap_demo.core.t5750(owner,app,nav_header,null));
});
om_bootstrap_demo.core.nav_main = (function nav_main(app,owner){if(typeof om_bootstrap_demo.core.t5756 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t5756 = (function (owner,app,nav_main,meta5757){
this.owner = owner;
this.app = app;
this.nav_main = nav_main;
this.meta5757 = meta5757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t5756.cljs$lang$type = true;
om_bootstrap_demo.core.t5756.cljs$lang$ctorStr = "om-bootstrap-demo.core/t5756";
om_bootstrap_demo.core.t5756.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-bootstrap-demo.core/t5756");
});
om_bootstrap_demo.core.t5756.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t5756.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_bootstrap.dom.navbar.call(null,{"role": "banner", "className": "bs-docs-nav", "staticTop": "", "componentClass": om.dom.header},React.DOM.div({"className": "container"},"foo"));
});
om_bootstrap_demo.core.t5756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5758){var self__ = this;
var _5758__$1 = this;return self__.meta5757;
});
om_bootstrap_demo.core.t5756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5758,meta5757__$1){var self__ = this;
var _5758__$1 = this;return (new om_bootstrap_demo.core.t5756(self__.owner,self__.app,self__.nav_main,meta5757__$1));
});
om_bootstrap_demo.core.__GT_t5756 = (function __GT_t5756(owner__$1,app__$1,nav_main__$1,meta5757){return (new om_bootstrap_demo.core.t5756(owner__$1,app__$1,nav_main__$1,meta5757));
});
}
return (new om_bootstrap_demo.core.t5756(owner,app,nav_main,null));
});
om.core.root.call(null,om_bootstrap_demo.core.nav_main,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("header")], null));

//# sourceMappingURL=core.js.map