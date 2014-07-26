// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7220 = {};return obj7220;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3531__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (dommy.template._elem[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (dommy.template._elem["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_7223 = node_str.substring(base_idx);while(true){
var next_idx_7224 = dommy.template.next_css_index.call(null,str_7223,(1));var frag_7225 = (((next_idx_7224 >= (0)))?str_7223.substring((0),next_idx_7224):str_7223);var G__7222_7226 = frag_7225.charAt((0));switch (G__7222_7226) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_7225.substring((1)));

break;
case "#":
node.setAttribute("id",frag_7225.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_7225.charAt((0))))));

}
if((next_idx_7224 >= (0)))
{{
var G__7228 = str_7223.substring(next_idx_7224);
str_7223 = G__7228;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7234 = data;if(G__7234)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__7234.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7234.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7234);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7235_7239 = cljs.core.seq.call(null,data);var chunk__7236_7240 = null;var count__7237_7241 = (0);var i__7238_7242 = (0);while(true){
if((i__7238_7242 < count__7237_7241))
{var child_7243 = cljs.core._nth.call(null,chunk__7236_7240,i__7238_7242);__GT_document_fragment.call(null,result_frag,child_7243);
{
var G__7244 = seq__7235_7239;
var G__7245 = chunk__7236_7240;
var G__7246 = count__7237_7241;
var G__7247 = (i__7238_7242 + (1));
seq__7235_7239 = G__7244;
chunk__7236_7240 = G__7245;
count__7237_7241 = G__7246;
i__7238_7242 = G__7247;
continue;
}
} else
{var temp__4126__auto___7248 = cljs.core.seq.call(null,seq__7235_7239);if(temp__4126__auto___7248)
{var seq__7235_7249__$1 = temp__4126__auto___7248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7235_7249__$1))
{var c__4299__auto___7250 = cljs.core.chunk_first.call(null,seq__7235_7249__$1);{
var G__7251 = cljs.core.chunk_rest.call(null,seq__7235_7249__$1);
var G__7252 = c__4299__auto___7250;
var G__7253 = cljs.core.count.call(null,c__4299__auto___7250);
var G__7254 = (0);
seq__7235_7239 = G__7251;
chunk__7236_7240 = G__7252;
count__7237_7241 = G__7253;
i__7238_7242 = G__7254;
continue;
}
} else
{var child_7255 = cljs.core.first.call(null,seq__7235_7249__$1);__GT_document_fragment.call(null,result_frag,child_7255);
{
var G__7256 = cljs.core.next.call(null,seq__7235_7249__$1);
var G__7257 = null;
var G__7258 = (0);
var G__7259 = (0);
seq__7235_7239 = G__7256;
chunk__7236_7240 = G__7257;
count__7237_7241 = G__7258;
i__7238_7242 = G__7259;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7261 = data;if(G__7261)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__7261.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7261);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__7262){var vec__7282 = p__7262;var tag_name = cljs.core.nth.call(null,vec__7282,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__7282,(1),null);var children = cljs.core.nthnext.call(null,vec__7282,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7284 = maybe_attrs;if(G__7284)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__7284.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7284.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7284);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7285_7301 = cljs.core.seq.call(null,attrs);var chunk__7286_7302 = null;var count__7287_7303 = (0);var i__7288_7304 = (0);while(true){
if((i__7288_7304 < count__7287_7303))
{var vec__7289_7305 = cljs.core._nth.call(null,chunk__7286_7302,i__7288_7304);var k_7306 = cljs.core.nth.call(null,vec__7289_7305,(0),null);var v_7307 = cljs.core.nth.call(null,vec__7289_7305,(1),null);var G__7290_7308 = (((k_7306 instanceof cljs.core.Keyword))?k_7306.fqn:null);switch (G__7290_7308) {
case "classes":
var seq__7291_7310 = cljs.core.seq.call(null,v_7307);var chunk__7292_7311 = null;var count__7293_7312 = (0);var i__7294_7313 = (0);while(true){
if((i__7294_7313 < count__7293_7312))
{var c_7314 = cljs.core._nth.call(null,chunk__7292_7311,i__7294_7313);dommy.attrs.add_class_BANG_.call(null,n,c_7314);
{
var G__7315 = seq__7291_7310;
var G__7316 = chunk__7292_7311;
var G__7317 = count__7293_7312;
var G__7318 = (i__7294_7313 + (1));
seq__7291_7310 = G__7315;
chunk__7292_7311 = G__7316;
count__7293_7312 = G__7317;
i__7294_7313 = G__7318;
continue;
}
} else
{var temp__4126__auto___7319 = cljs.core.seq.call(null,seq__7291_7310);if(temp__4126__auto___7319)
{var seq__7291_7320__$1 = temp__4126__auto___7319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7291_7320__$1))
{var c__4299__auto___7321 = cljs.core.chunk_first.call(null,seq__7291_7320__$1);{
var G__7322 = cljs.core.chunk_rest.call(null,seq__7291_7320__$1);
var G__7323 = c__4299__auto___7321;
var G__7324 = cljs.core.count.call(null,c__4299__auto___7321);
var G__7325 = (0);
seq__7291_7310 = G__7322;
chunk__7292_7311 = G__7323;
count__7293_7312 = G__7324;
i__7294_7313 = G__7325;
continue;
}
} else
{var c_7326 = cljs.core.first.call(null,seq__7291_7320__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7326);
{
var G__7327 = cljs.core.next.call(null,seq__7291_7320__$1);
var G__7328 = null;
var G__7329 = (0);
var G__7330 = (0);
seq__7291_7310 = G__7327;
chunk__7292_7311 = G__7328;
count__7293_7312 = G__7329;
i__7294_7313 = G__7330;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7307);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7306,v_7307);

}
{
var G__7331 = seq__7285_7301;
var G__7332 = chunk__7286_7302;
var G__7333 = count__7287_7303;
var G__7334 = (i__7288_7304 + (1));
seq__7285_7301 = G__7331;
chunk__7286_7302 = G__7332;
count__7287_7303 = G__7333;
i__7288_7304 = G__7334;
continue;
}
} else
{var temp__4126__auto___7335 = cljs.core.seq.call(null,seq__7285_7301);if(temp__4126__auto___7335)
{var seq__7285_7336__$1 = temp__4126__auto___7335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7285_7336__$1))
{var c__4299__auto___7337 = cljs.core.chunk_first.call(null,seq__7285_7336__$1);{
var G__7338 = cljs.core.chunk_rest.call(null,seq__7285_7336__$1);
var G__7339 = c__4299__auto___7337;
var G__7340 = cljs.core.count.call(null,c__4299__auto___7337);
var G__7341 = (0);
seq__7285_7301 = G__7338;
chunk__7286_7302 = G__7339;
count__7287_7303 = G__7340;
i__7288_7304 = G__7341;
continue;
}
} else
{var vec__7295_7342 = cljs.core.first.call(null,seq__7285_7336__$1);var k_7343 = cljs.core.nth.call(null,vec__7295_7342,(0),null);var v_7344 = cljs.core.nth.call(null,vec__7295_7342,(1),null);var G__7296_7345 = (((k_7343 instanceof cljs.core.Keyword))?k_7343.fqn:null);switch (G__7296_7345) {
case "classes":
var seq__7297_7347 = cljs.core.seq.call(null,v_7344);var chunk__7298_7348 = null;var count__7299_7349 = (0);var i__7300_7350 = (0);while(true){
if((i__7300_7350 < count__7299_7349))
{var c_7351 = cljs.core._nth.call(null,chunk__7298_7348,i__7300_7350);dommy.attrs.add_class_BANG_.call(null,n,c_7351);
{
var G__7352 = seq__7297_7347;
var G__7353 = chunk__7298_7348;
var G__7354 = count__7299_7349;
var G__7355 = (i__7300_7350 + (1));
seq__7297_7347 = G__7352;
chunk__7298_7348 = G__7353;
count__7299_7349 = G__7354;
i__7300_7350 = G__7355;
continue;
}
} else
{var temp__4126__auto___7356__$1 = cljs.core.seq.call(null,seq__7297_7347);if(temp__4126__auto___7356__$1)
{var seq__7297_7357__$1 = temp__4126__auto___7356__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7297_7357__$1))
{var c__4299__auto___7358 = cljs.core.chunk_first.call(null,seq__7297_7357__$1);{
var G__7359 = cljs.core.chunk_rest.call(null,seq__7297_7357__$1);
var G__7360 = c__4299__auto___7358;
var G__7361 = cljs.core.count.call(null,c__4299__auto___7358);
var G__7362 = (0);
seq__7297_7347 = G__7359;
chunk__7298_7348 = G__7360;
count__7299_7349 = G__7361;
i__7300_7350 = G__7362;
continue;
}
} else
{var c_7363 = cljs.core.first.call(null,seq__7297_7357__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7363);
{
var G__7364 = cljs.core.next.call(null,seq__7297_7357__$1);
var G__7365 = null;
var G__7366 = (0);
var G__7367 = (0);
seq__7297_7347 = G__7364;
chunk__7298_7348 = G__7365;
count__7299_7349 = G__7366;
i__7300_7350 = G__7367;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7344);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7343,v_7344);

}
{
var G__7368 = cljs.core.next.call(null,seq__7285_7336__$1);
var G__7369 = null;
var G__7370 = (0);
var G__7371 = (0);
seq__7285_7301 = G__7368;
chunk__7286_7302 = G__7369;
count__7287_7303 = G__7370;
i__7288_7304 = G__7371;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e7372){if((e7372 instanceof ReferenceError))
{var __7373 = e7372;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e7372;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7375 = data;if(G__7375)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__7375.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7375.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7375);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7375);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map