// Compiled by ClojureScript 0.0-2277
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
om_bootstrap_demo.core.nav_header = (function nav_header(app,owner){if(typeof om_bootstrap_demo.core.t7533 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7533 = (function (owner,app,nav_header,meta7534){
this.owner = owner;
this.app = app;
this.nav_header = nav_header;
this.meta7534 = meta7534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7533.cljs$lang$type = true;
om_bootstrap_demo.core.t7533.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7533";
om_bootstrap_demo.core.t7533.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7533");
});
om_bootstrap_demo.core.t7533.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7533.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "container"},om_bootstrap.dom.nav.call(null,{"className": "collapse navbar-collapse bs-navbar-collapse", "bsStyle": "tabs"},om_bootstrap.dom.nav_item.call(null,null,"Om Bootstrap"),om_bootstrap.dom.nav_item.call(null,null,"Getting started"),om_bootstrap.dom.nav_item.call(null,null,"Components")));
});
om_bootstrap_demo.core.t7533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7535){var self__ = this;
var _7535__$1 = this;return self__.meta7534;
});
om_bootstrap_demo.core.t7533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7535,meta7534__$1){var self__ = this;
var _7535__$1 = this;return (new om_bootstrap_demo.core.t7533(self__.owner,self__.app,self__.nav_header,meta7534__$1));
});
om_bootstrap_demo.core.__GT_t7533 = (function __GT_t7533(owner__$1,app__$1,nav_header__$1,meta7534){return (new om_bootstrap_demo.core.t7533(owner__$1,app__$1,nav_header__$1,meta7534));
});
}
return (new om_bootstrap_demo.core.t7533(owner,app,nav_header,null));
});
om_bootstrap_demo.core.nav_main = (function nav_main(app,owner){if(typeof om_bootstrap_demo.core.t7539 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap_demo.core.t7539 = (function (owner,app,nav_main,meta7540){
this.owner = owner;
this.app = app;
this.nav_main = nav_main;
this.meta7540 = meta7540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap_demo.core.t7539.cljs$lang$type = true;
om_bootstrap_demo.core.t7539.cljs$lang$ctorStr = "om-bootstrap-demo.core/t7539";
om_bootstrap_demo.core.t7539.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"om-bootstrap-demo.core/t7539");
});
om_bootstrap_demo.core.t7539.prototype.om$core$IRender$ = true;
om_bootstrap_demo.core.t7539.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om_bootstrap.dom.navbar.call(null,{"toggleNavKey": (0), "role": "banner", "className": "bs-docs-nav", "staticTop": true, "brand": React.DOM.a({"className": "navbar-brand", "href": "/"},"OM Bootstrap"), "componentClass": om.dom.header},om_bootstrap.dom.nav.call(null,{"id": "top", "key": (0), "role": "navigation", "className": "bs-navbar-collapse"},React.DOM.li({"key": "getting-started"},React.DOM.a({"href": "/gettings-started"},"Getting Started")),React.DOM.li({"key": "components"},React.DOM.a({"href": "/components"},"Components"))));
});
om_bootstrap_demo.core.t7539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7541){var self__ = this;
var _7541__$1 = this;return self__.meta7540;
});
om_bootstrap_demo.core.t7539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7541,meta7540__$1){var self__ = this;
var _7541__$1 = this;return (new om_bootstrap_demo.core.t7539(self__.owner,self__.app,self__.nav_main,meta7540__$1));
});
om_bootstrap_demo.core.__GT_t7539 = (function __GT_t7539(owner__$1,app__$1,nav_main__$1,meta7540){return (new om_bootstrap_demo.core.t7539(owner__$1,app__$1,nav_main__$1,meta7540));
});
}
return (new om_bootstrap_demo.core.t7539(owner,app,nav_main,null));
});
om.core.root.call(null,om_bootstrap_demo.core.nav_main,om_bootstrap_demo.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("header")], null));

//# sourceMappingURL=core.js.map