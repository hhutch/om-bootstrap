// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3543__auto__ = elem.textContent;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6545 = dommy.template.__GT_node_like.call(null,parent);G__6545.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6545;
});
var append_BANG___3 = (function() { 
var G__6550__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6546_6551 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6547_6552 = null;var count__6548_6553 = (0);var i__6549_6554 = (0);while(true){
if((i__6549_6554 < count__6548_6553))
{var c_6555 = cljs.core._nth.call(null,chunk__6547_6552,i__6549_6554);append_BANG_.call(null,parent__$1,c_6555);
{
var G__6556 = seq__6546_6551;
var G__6557 = chunk__6547_6552;
var G__6558 = count__6548_6553;
var G__6559 = (i__6549_6554 + (1));
seq__6546_6551 = G__6556;
chunk__6547_6552 = G__6557;
count__6548_6553 = G__6558;
i__6549_6554 = G__6559;
continue;
}
} else
{var temp__4126__auto___6560 = cljs.core.seq.call(null,seq__6546_6551);if(temp__4126__auto___6560)
{var seq__6546_6561__$1 = temp__4126__auto___6560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6546_6561__$1))
{var c__4299__auto___6562 = cljs.core.chunk_first.call(null,seq__6546_6561__$1);{
var G__6563 = cljs.core.chunk_rest.call(null,seq__6546_6561__$1);
var G__6564 = c__4299__auto___6562;
var G__6565 = cljs.core.count.call(null,c__4299__auto___6562);
var G__6566 = (0);
seq__6546_6551 = G__6563;
chunk__6547_6552 = G__6564;
count__6548_6553 = G__6565;
i__6549_6554 = G__6566;
continue;
}
} else
{var c_6567 = cljs.core.first.call(null,seq__6546_6561__$1);append_BANG_.call(null,parent__$1,c_6567);
{
var G__6568 = cljs.core.next.call(null,seq__6546_6561__$1);
var G__6569 = null;
var G__6570 = (0);
var G__6571 = (0);
seq__6546_6551 = G__6568;
chunk__6547_6552 = G__6569;
count__6548_6553 = G__6570;
i__6549_6554 = G__6571;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6550 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6550__delegate.call(this,parent,child,more_children);};
G__6550.cljs$lang$maxFixedArity = 2;
G__6550.cljs$lang$applyTo = (function (arglist__6572){
var parent = cljs.core.first(arglist__6572);
arglist__6572 = cljs.core.next(arglist__6572);
var child = cljs.core.first(arglist__6572);
var more_children = cljs.core.rest(arglist__6572);
return G__6550__delegate(parent,child,more_children);
});
G__6550.cljs$core$IFn$_invoke$arity$variadic = G__6550__delegate;
return G__6550;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__6581__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6577_6582 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6578_6583 = null;var count__6579_6584 = (0);var i__6580_6585 = (0);while(true){
if((i__6580_6585 < count__6579_6584))
{var c_6586 = cljs.core._nth.call(null,chunk__6578_6583,i__6580_6585);prepend_BANG_.call(null,parent__$1,c_6586);
{
var G__6587 = seq__6577_6582;
var G__6588 = chunk__6578_6583;
var G__6589 = count__6579_6584;
var G__6590 = (i__6580_6585 + (1));
seq__6577_6582 = G__6587;
chunk__6578_6583 = G__6588;
count__6579_6584 = G__6589;
i__6580_6585 = G__6590;
continue;
}
} else
{var temp__4126__auto___6591 = cljs.core.seq.call(null,seq__6577_6582);if(temp__4126__auto___6591)
{var seq__6577_6592__$1 = temp__4126__auto___6591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6577_6592__$1))
{var c__4299__auto___6593 = cljs.core.chunk_first.call(null,seq__6577_6592__$1);{
var G__6594 = cljs.core.chunk_rest.call(null,seq__6577_6592__$1);
var G__6595 = c__4299__auto___6593;
var G__6596 = cljs.core.count.call(null,c__4299__auto___6593);
var G__6597 = (0);
seq__6577_6582 = G__6594;
chunk__6578_6583 = G__6595;
count__6579_6584 = G__6596;
i__6580_6585 = G__6597;
continue;
}
} else
{var c_6598 = cljs.core.first.call(null,seq__6577_6592__$1);prepend_BANG_.call(null,parent__$1,c_6598);
{
var G__6599 = cljs.core.next.call(null,seq__6577_6592__$1);
var G__6600 = null;
var G__6601 = (0);
var G__6602 = (0);
seq__6577_6582 = G__6599;
chunk__6578_6583 = G__6600;
count__6579_6584 = G__6601;
i__6580_6585 = G__6602;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6581 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6581__delegate.call(this,parent,child,more_children);};
G__6581.cljs$lang$maxFixedArity = 2;
G__6581.cljs$lang$applyTo = (function (arglist__6603){
var parent = cljs.core.first(arglist__6603);
arglist__6603 = cljs.core.next(arglist__6603);
var child = cljs.core.first(arglist__6603);
var more_children = cljs.core.rest(arglist__6603);
return G__6581__delegate(parent,child,more_children);
});
G__6581.cljs$core$IFn$_invoke$arity$variadic = G__6581__delegate;
return G__6581;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___6604 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___6604))
{var next_6605 = temp__4124__auto___6604;parent.insertBefore(actual_node,next_6605);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6607 = dommy.template.__GT_node_like.call(null,parent);G__6607.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6607,node_like);
return G__6607;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__6609 = elem__$1.parentNode;G__6609.removeChild(elem__$1);
return G__6609;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__6615){var vec__6616 = p__6615;var k = cljs.core.nth.call(null,vec__6616,(0),null);var v = cljs.core.nth.call(null,vec__6616,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t6617 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6617 = (function (v,k,vec__6616,p__6615,container,key_selectors_map,template,selector_map,meta6618){
this.v = v;
this.k = k;
this.vec__6616 = vec__6616;
this.p__6615 = p__6615;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6618 = meta6618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6617.cljs$lang$type = true;
dommy.core.t6617.cljs$lang$ctorStr = "dommy.core/t6617";
dommy.core.t6617.cljs$lang$ctorPrWriter = ((function (vec__6616,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t6617");
});})(vec__6616,k,v,container))
;
dommy.core.t6617.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__6616,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__6616,k,v,container))
;
dommy.core.t6617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__6616,k,v,container){
return (function (_6619){var self__ = this;
var _6619__$1 = this;return self__.meta6618;
});})(vec__6616,k,v,container))
;
dommy.core.t6617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__6616,k,v,container){
return (function (_6619,meta6618__$1){var self__ = this;
var _6619__$1 = this;return (new dommy.core.t6617(self__.v,self__.k,self__.vec__6616,self__.p__6615,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6618__$1));
});})(vec__6616,k,v,container))
;
dommy.core.__GT_t6617 = ((function (vec__6616,k,v,container){
return (function __GT_t6617(v__$1,k__$1,vec__6616__$1,p__6615__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6618){return (new dommy.core.t6617(v__$1,k__$1,vec__6616__$1,p__6615__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6618));
});})(vec__6616,k,v,container))
;
}
return (new dommy.core.t6617(v,k,vec__6616,p__6615,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6620_SHARP_){return p1__6620_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__6621_SHARP_){return !((p1__6621_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6622){var vec__6623 = p__6622;var special_mouse_event = cljs.core.nth.call(null,vec__6623,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6623,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6623,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6623,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3543__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3531__auto__ = related_target;if(cljs.core.truth_(and__3531__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3531__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__6623,special_mouse_event,real_mouse_event))
});})(vec__6623,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3531__auto__ = selected_target;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3531__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3543__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6624){
var elem = cljs.core.first(arglist__6624);
arglist__6624 = cljs.core.next(arglist__6624);
var f = cljs.core.first(arglist__6624);
var args = cljs.core.rest(arglist__6624);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6625_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6625_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6649_6672 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6673 = cljs.core.nth.call(null,vec__6649_6672,(0),null);var selector_6674 = cljs.core.nth.call(null,vec__6649_6672,(1),null);var seq__6650_6675 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6657_6676 = null;var count__6658_6677 = (0);var i__6659_6678 = (0);while(true){
if((i__6659_6678 < count__6658_6677))
{var vec__6666_6679 = cljs.core._nth.call(null,chunk__6657_6676,i__6659_6678);var orig_type_6680 = cljs.core.nth.call(null,vec__6666_6679,(0),null);var f_6681 = cljs.core.nth.call(null,vec__6666_6679,(1),null);var seq__6660_6682 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6680,new cljs.core.PersistentArrayMap.fromArray([orig_type_6680,cljs.core.identity], true, false)));var chunk__6662_6683 = null;var count__6663_6684 = (0);var i__6664_6685 = (0);while(true){
if((i__6664_6685 < count__6663_6684))
{var vec__6667_6686 = cljs.core._nth.call(null,chunk__6662_6683,i__6664_6685);var actual_type_6687 = cljs.core.nth.call(null,vec__6667_6686,(0),null);var factory_6688 = cljs.core.nth.call(null,vec__6667_6686,(1),null);var canonical_f_6689 = (cljs.core.truth_(selector_6674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6673,selector_6674):cljs.core.identity).call(null,factory_6688.call(null,f_6681));dommy.core.update_event_listeners_BANG_.call(null,elem_6673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6674,actual_type_6687,f_6681], null),canonical_f_6689);
if(cljs.core.truth_(elem_6673.addEventListener))
{elem_6673.addEventListener(cljs.core.name.call(null,actual_type_6687),canonical_f_6689);
} else
{elem_6673.attachEvent(cljs.core.name.call(null,actual_type_6687),canonical_f_6689);
}
{
var G__6690 = seq__6660_6682;
var G__6691 = chunk__6662_6683;
var G__6692 = count__6663_6684;
var G__6693 = (i__6664_6685 + (1));
seq__6660_6682 = G__6690;
chunk__6662_6683 = G__6691;
count__6663_6684 = G__6692;
i__6664_6685 = G__6693;
continue;
}
} else
{var temp__4126__auto___6694 = cljs.core.seq.call(null,seq__6660_6682);if(temp__4126__auto___6694)
{var seq__6660_6695__$1 = temp__4126__auto___6694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6660_6695__$1))
{var c__4299__auto___6696 = cljs.core.chunk_first.call(null,seq__6660_6695__$1);{
var G__6697 = cljs.core.chunk_rest.call(null,seq__6660_6695__$1);
var G__6698 = c__4299__auto___6696;
var G__6699 = cljs.core.count.call(null,c__4299__auto___6696);
var G__6700 = (0);
seq__6660_6682 = G__6697;
chunk__6662_6683 = G__6698;
count__6663_6684 = G__6699;
i__6664_6685 = G__6700;
continue;
}
} else
{var vec__6668_6701 = cljs.core.first.call(null,seq__6660_6695__$1);var actual_type_6702 = cljs.core.nth.call(null,vec__6668_6701,(0),null);var factory_6703 = cljs.core.nth.call(null,vec__6668_6701,(1),null);var canonical_f_6704 = (cljs.core.truth_(selector_6674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6673,selector_6674):cljs.core.identity).call(null,factory_6703.call(null,f_6681));dommy.core.update_event_listeners_BANG_.call(null,elem_6673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6674,actual_type_6702,f_6681], null),canonical_f_6704);
if(cljs.core.truth_(elem_6673.addEventListener))
{elem_6673.addEventListener(cljs.core.name.call(null,actual_type_6702),canonical_f_6704);
} else
{elem_6673.attachEvent(cljs.core.name.call(null,actual_type_6702),canonical_f_6704);
}
{
var G__6705 = cljs.core.next.call(null,seq__6660_6695__$1);
var G__6706 = null;
var G__6707 = (0);
var G__6708 = (0);
seq__6660_6682 = G__6705;
chunk__6662_6683 = G__6706;
count__6663_6684 = G__6707;
i__6664_6685 = G__6708;
continue;
}
}
} else
{}
}
break;
}
{
var G__6709 = seq__6650_6675;
var G__6710 = chunk__6657_6676;
var G__6711 = count__6658_6677;
var G__6712 = (i__6659_6678 + (1));
seq__6650_6675 = G__6709;
chunk__6657_6676 = G__6710;
count__6658_6677 = G__6711;
i__6659_6678 = G__6712;
continue;
}
} else
{var temp__4126__auto___6713 = cljs.core.seq.call(null,seq__6650_6675);if(temp__4126__auto___6713)
{var seq__6650_6714__$1 = temp__4126__auto___6713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6650_6714__$1))
{var c__4299__auto___6715 = cljs.core.chunk_first.call(null,seq__6650_6714__$1);{
var G__6716 = cljs.core.chunk_rest.call(null,seq__6650_6714__$1);
var G__6717 = c__4299__auto___6715;
var G__6718 = cljs.core.count.call(null,c__4299__auto___6715);
var G__6719 = (0);
seq__6650_6675 = G__6716;
chunk__6657_6676 = G__6717;
count__6658_6677 = G__6718;
i__6659_6678 = G__6719;
continue;
}
} else
{var vec__6669_6720 = cljs.core.first.call(null,seq__6650_6714__$1);var orig_type_6721 = cljs.core.nth.call(null,vec__6669_6720,(0),null);var f_6722 = cljs.core.nth.call(null,vec__6669_6720,(1),null);var seq__6651_6723 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6721,new cljs.core.PersistentArrayMap.fromArray([orig_type_6721,cljs.core.identity], true, false)));var chunk__6653_6724 = null;var count__6654_6725 = (0);var i__6655_6726 = (0);while(true){
if((i__6655_6726 < count__6654_6725))
{var vec__6670_6727 = cljs.core._nth.call(null,chunk__6653_6724,i__6655_6726);var actual_type_6728 = cljs.core.nth.call(null,vec__6670_6727,(0),null);var factory_6729 = cljs.core.nth.call(null,vec__6670_6727,(1),null);var canonical_f_6730 = (cljs.core.truth_(selector_6674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6673,selector_6674):cljs.core.identity).call(null,factory_6729.call(null,f_6722));dommy.core.update_event_listeners_BANG_.call(null,elem_6673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6674,actual_type_6728,f_6722], null),canonical_f_6730);
if(cljs.core.truth_(elem_6673.addEventListener))
{elem_6673.addEventListener(cljs.core.name.call(null,actual_type_6728),canonical_f_6730);
} else
{elem_6673.attachEvent(cljs.core.name.call(null,actual_type_6728),canonical_f_6730);
}
{
var G__6731 = seq__6651_6723;
var G__6732 = chunk__6653_6724;
var G__6733 = count__6654_6725;
var G__6734 = (i__6655_6726 + (1));
seq__6651_6723 = G__6731;
chunk__6653_6724 = G__6732;
count__6654_6725 = G__6733;
i__6655_6726 = G__6734;
continue;
}
} else
{var temp__4126__auto___6735__$1 = cljs.core.seq.call(null,seq__6651_6723);if(temp__4126__auto___6735__$1)
{var seq__6651_6736__$1 = temp__4126__auto___6735__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6651_6736__$1))
{var c__4299__auto___6737 = cljs.core.chunk_first.call(null,seq__6651_6736__$1);{
var G__6738 = cljs.core.chunk_rest.call(null,seq__6651_6736__$1);
var G__6739 = c__4299__auto___6737;
var G__6740 = cljs.core.count.call(null,c__4299__auto___6737);
var G__6741 = (0);
seq__6651_6723 = G__6738;
chunk__6653_6724 = G__6739;
count__6654_6725 = G__6740;
i__6655_6726 = G__6741;
continue;
}
} else
{var vec__6671_6742 = cljs.core.first.call(null,seq__6651_6736__$1);var actual_type_6743 = cljs.core.nth.call(null,vec__6671_6742,(0),null);var factory_6744 = cljs.core.nth.call(null,vec__6671_6742,(1),null);var canonical_f_6745 = (cljs.core.truth_(selector_6674)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6673,selector_6674):cljs.core.identity).call(null,factory_6744.call(null,f_6722));dommy.core.update_event_listeners_BANG_.call(null,elem_6673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6674,actual_type_6743,f_6722], null),canonical_f_6745);
if(cljs.core.truth_(elem_6673.addEventListener))
{elem_6673.addEventListener(cljs.core.name.call(null,actual_type_6743),canonical_f_6745);
} else
{elem_6673.attachEvent(cljs.core.name.call(null,actual_type_6743),canonical_f_6745);
}
{
var G__6746 = cljs.core.next.call(null,seq__6651_6736__$1);
var G__6747 = null;
var G__6748 = (0);
var G__6749 = (0);
seq__6651_6723 = G__6746;
chunk__6653_6724 = G__6747;
count__6654_6725 = G__6748;
i__6655_6726 = G__6749;
continue;
}
}
} else
{}
}
break;
}
{
var G__6750 = cljs.core.next.call(null,seq__6650_6714__$1);
var G__6751 = null;
var G__6752 = (0);
var G__6753 = (0);
seq__6650_6675 = G__6750;
chunk__6657_6676 = G__6751;
count__6658_6677 = G__6752;
i__6659_6678 = G__6753;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6754){
var elem_sel = cljs.core.first(arglist__6754);
var type_fs = cljs.core.rest(arglist__6754);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6778_6801 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6802 = cljs.core.nth.call(null,vec__6778_6801,(0),null);var selector_6803 = cljs.core.nth.call(null,vec__6778_6801,(1),null);var seq__6779_6804 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6786_6805 = null;var count__6787_6806 = (0);var i__6788_6807 = (0);while(true){
if((i__6788_6807 < count__6787_6806))
{var vec__6795_6808 = cljs.core._nth.call(null,chunk__6786_6805,i__6788_6807);var orig_type_6809 = cljs.core.nth.call(null,vec__6795_6808,(0),null);var f_6810 = cljs.core.nth.call(null,vec__6795_6808,(1),null);var seq__6789_6811 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6809,new cljs.core.PersistentArrayMap.fromArray([orig_type_6809,cljs.core.identity], true, false)));var chunk__6791_6812 = null;var count__6792_6813 = (0);var i__6793_6814 = (0);while(true){
if((i__6793_6814 < count__6792_6813))
{var vec__6796_6815 = cljs.core._nth.call(null,chunk__6791_6812,i__6793_6814);var actual_type_6816 = cljs.core.nth.call(null,vec__6796_6815,(0),null);var __6817 = cljs.core.nth.call(null,vec__6796_6815,(1),null);var keys_6818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6803,actual_type_6816,f_6810], null);var canonical_f_6819 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6802),keys_6818);dommy.core.update_event_listeners_BANG_.call(null,elem_6802,dommy.utils.dissoc_in,keys_6818);
if(cljs.core.truth_(elem_6802.removeEventListener))
{elem_6802.removeEventListener(cljs.core.name.call(null,actual_type_6816),canonical_f_6819);
} else
{elem_6802.detachEvent(cljs.core.name.call(null,actual_type_6816),canonical_f_6819);
}
{
var G__6820 = seq__6789_6811;
var G__6821 = chunk__6791_6812;
var G__6822 = count__6792_6813;
var G__6823 = (i__6793_6814 + (1));
seq__6789_6811 = G__6820;
chunk__6791_6812 = G__6821;
count__6792_6813 = G__6822;
i__6793_6814 = G__6823;
continue;
}
} else
{var temp__4126__auto___6824 = cljs.core.seq.call(null,seq__6789_6811);if(temp__4126__auto___6824)
{var seq__6789_6825__$1 = temp__4126__auto___6824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6789_6825__$1))
{var c__4299__auto___6826 = cljs.core.chunk_first.call(null,seq__6789_6825__$1);{
var G__6827 = cljs.core.chunk_rest.call(null,seq__6789_6825__$1);
var G__6828 = c__4299__auto___6826;
var G__6829 = cljs.core.count.call(null,c__4299__auto___6826);
var G__6830 = (0);
seq__6789_6811 = G__6827;
chunk__6791_6812 = G__6828;
count__6792_6813 = G__6829;
i__6793_6814 = G__6830;
continue;
}
} else
{var vec__6797_6831 = cljs.core.first.call(null,seq__6789_6825__$1);var actual_type_6832 = cljs.core.nth.call(null,vec__6797_6831,(0),null);var __6833 = cljs.core.nth.call(null,vec__6797_6831,(1),null);var keys_6834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6803,actual_type_6832,f_6810], null);var canonical_f_6835 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6802),keys_6834);dommy.core.update_event_listeners_BANG_.call(null,elem_6802,dommy.utils.dissoc_in,keys_6834);
if(cljs.core.truth_(elem_6802.removeEventListener))
{elem_6802.removeEventListener(cljs.core.name.call(null,actual_type_6832),canonical_f_6835);
} else
{elem_6802.detachEvent(cljs.core.name.call(null,actual_type_6832),canonical_f_6835);
}
{
var G__6836 = cljs.core.next.call(null,seq__6789_6825__$1);
var G__6837 = null;
var G__6838 = (0);
var G__6839 = (0);
seq__6789_6811 = G__6836;
chunk__6791_6812 = G__6837;
count__6792_6813 = G__6838;
i__6793_6814 = G__6839;
continue;
}
}
} else
{}
}
break;
}
{
var G__6840 = seq__6779_6804;
var G__6841 = chunk__6786_6805;
var G__6842 = count__6787_6806;
var G__6843 = (i__6788_6807 + (1));
seq__6779_6804 = G__6840;
chunk__6786_6805 = G__6841;
count__6787_6806 = G__6842;
i__6788_6807 = G__6843;
continue;
}
} else
{var temp__4126__auto___6844 = cljs.core.seq.call(null,seq__6779_6804);if(temp__4126__auto___6844)
{var seq__6779_6845__$1 = temp__4126__auto___6844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6779_6845__$1))
{var c__4299__auto___6846 = cljs.core.chunk_first.call(null,seq__6779_6845__$1);{
var G__6847 = cljs.core.chunk_rest.call(null,seq__6779_6845__$1);
var G__6848 = c__4299__auto___6846;
var G__6849 = cljs.core.count.call(null,c__4299__auto___6846);
var G__6850 = (0);
seq__6779_6804 = G__6847;
chunk__6786_6805 = G__6848;
count__6787_6806 = G__6849;
i__6788_6807 = G__6850;
continue;
}
} else
{var vec__6798_6851 = cljs.core.first.call(null,seq__6779_6845__$1);var orig_type_6852 = cljs.core.nth.call(null,vec__6798_6851,(0),null);var f_6853 = cljs.core.nth.call(null,vec__6798_6851,(1),null);var seq__6780_6854 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6852,new cljs.core.PersistentArrayMap.fromArray([orig_type_6852,cljs.core.identity], true, false)));var chunk__6782_6855 = null;var count__6783_6856 = (0);var i__6784_6857 = (0);while(true){
if((i__6784_6857 < count__6783_6856))
{var vec__6799_6858 = cljs.core._nth.call(null,chunk__6782_6855,i__6784_6857);var actual_type_6859 = cljs.core.nth.call(null,vec__6799_6858,(0),null);var __6860 = cljs.core.nth.call(null,vec__6799_6858,(1),null);var keys_6861 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6803,actual_type_6859,f_6853], null);var canonical_f_6862 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6802),keys_6861);dommy.core.update_event_listeners_BANG_.call(null,elem_6802,dommy.utils.dissoc_in,keys_6861);
if(cljs.core.truth_(elem_6802.removeEventListener))
{elem_6802.removeEventListener(cljs.core.name.call(null,actual_type_6859),canonical_f_6862);
} else
{elem_6802.detachEvent(cljs.core.name.call(null,actual_type_6859),canonical_f_6862);
}
{
var G__6863 = seq__6780_6854;
var G__6864 = chunk__6782_6855;
var G__6865 = count__6783_6856;
var G__6866 = (i__6784_6857 + (1));
seq__6780_6854 = G__6863;
chunk__6782_6855 = G__6864;
count__6783_6856 = G__6865;
i__6784_6857 = G__6866;
continue;
}
} else
{var temp__4126__auto___6867__$1 = cljs.core.seq.call(null,seq__6780_6854);if(temp__4126__auto___6867__$1)
{var seq__6780_6868__$1 = temp__4126__auto___6867__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6780_6868__$1))
{var c__4299__auto___6869 = cljs.core.chunk_first.call(null,seq__6780_6868__$1);{
var G__6870 = cljs.core.chunk_rest.call(null,seq__6780_6868__$1);
var G__6871 = c__4299__auto___6869;
var G__6872 = cljs.core.count.call(null,c__4299__auto___6869);
var G__6873 = (0);
seq__6780_6854 = G__6870;
chunk__6782_6855 = G__6871;
count__6783_6856 = G__6872;
i__6784_6857 = G__6873;
continue;
}
} else
{var vec__6800_6874 = cljs.core.first.call(null,seq__6780_6868__$1);var actual_type_6875 = cljs.core.nth.call(null,vec__6800_6874,(0),null);var __6876 = cljs.core.nth.call(null,vec__6800_6874,(1),null);var keys_6877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6803,actual_type_6875,f_6853], null);var canonical_f_6878 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6802),keys_6877);dommy.core.update_event_listeners_BANG_.call(null,elem_6802,dommy.utils.dissoc_in,keys_6877);
if(cljs.core.truth_(elem_6802.removeEventListener))
{elem_6802.removeEventListener(cljs.core.name.call(null,actual_type_6875),canonical_f_6878);
} else
{elem_6802.detachEvent(cljs.core.name.call(null,actual_type_6875),canonical_f_6878);
}
{
var G__6879 = cljs.core.next.call(null,seq__6780_6868__$1);
var G__6880 = null;
var G__6881 = (0);
var G__6882 = (0);
seq__6780_6854 = G__6879;
chunk__6782_6855 = G__6880;
count__6783_6856 = G__6881;
i__6784_6857 = G__6882;
continue;
}
}
} else
{}
}
break;
}
{
var G__6883 = cljs.core.next.call(null,seq__6779_6845__$1);
var G__6884 = null;
var G__6885 = (0);
var G__6886 = (0);
seq__6779_6804 = G__6883;
chunk__6786_6805 = G__6884;
count__6787_6806 = G__6885;
i__6788_6807 = G__6886;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6887){
var elem_sel = cljs.core.first(arglist__6887);
var type_fs = cljs.core.rest(arglist__6887);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__6895_6902 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6903 = cljs.core.nth.call(null,vec__6895_6902,(0),null);var selector_6904 = cljs.core.nth.call(null,vec__6895_6902,(1),null);var seq__6896_6905 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6897_6906 = null;var count__6898_6907 = (0);var i__6899_6908 = (0);while(true){
if((i__6899_6908 < count__6898_6907))
{var vec__6900_6909 = cljs.core._nth.call(null,chunk__6897_6906,i__6899_6908);var type_6910 = cljs.core.nth.call(null,vec__6900_6909,(0),null);var f_6911 = cljs.core.nth.call(null,vec__6900_6909,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6910,((function (seq__6896_6905,chunk__6897_6906,count__6898_6907,i__6899_6908,vec__6900_6909,type_6910,f_6911,vec__6895_6902,elem_6903,selector_6904){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6910,this_fn);
return f_6911.call(null,e);
});})(seq__6896_6905,chunk__6897_6906,count__6898_6907,i__6899_6908,vec__6900_6909,type_6910,f_6911,vec__6895_6902,elem_6903,selector_6904))
);
{
var G__6912 = seq__6896_6905;
var G__6913 = chunk__6897_6906;
var G__6914 = count__6898_6907;
var G__6915 = (i__6899_6908 + (1));
seq__6896_6905 = G__6912;
chunk__6897_6906 = G__6913;
count__6898_6907 = G__6914;
i__6899_6908 = G__6915;
continue;
}
} else
{var temp__4126__auto___6916 = cljs.core.seq.call(null,seq__6896_6905);if(temp__4126__auto___6916)
{var seq__6896_6917__$1 = temp__4126__auto___6916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6896_6917__$1))
{var c__4299__auto___6918 = cljs.core.chunk_first.call(null,seq__6896_6917__$1);{
var G__6919 = cljs.core.chunk_rest.call(null,seq__6896_6917__$1);
var G__6920 = c__4299__auto___6918;
var G__6921 = cljs.core.count.call(null,c__4299__auto___6918);
var G__6922 = (0);
seq__6896_6905 = G__6919;
chunk__6897_6906 = G__6920;
count__6898_6907 = G__6921;
i__6899_6908 = G__6922;
continue;
}
} else
{var vec__6901_6923 = cljs.core.first.call(null,seq__6896_6917__$1);var type_6924 = cljs.core.nth.call(null,vec__6901_6923,(0),null);var f_6925 = cljs.core.nth.call(null,vec__6901_6923,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_6924,((function (seq__6896_6905,chunk__6897_6906,count__6898_6907,i__6899_6908,vec__6901_6923,type_6924,f_6925,seq__6896_6917__$1,temp__4126__auto___6916,vec__6895_6902,elem_6903,selector_6904){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6924,this_fn);
return f_6925.call(null,e);
});})(seq__6896_6905,chunk__6897_6906,count__6898_6907,i__6899_6908,vec__6901_6923,type_6924,f_6925,seq__6896_6917__$1,temp__4126__auto___6916,vec__6895_6902,elem_6903,selector_6904))
);
{
var G__6926 = cljs.core.next.call(null,seq__6896_6917__$1);
var G__6927 = null;
var G__6928 = (0);
var G__6929 = (0);
seq__6896_6905 = G__6926;
chunk__6897_6906 = G__6927;
count__6898_6907 = G__6928;
i__6899_6908 = G__6929;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6930){
var elem_sel = cljs.core.first(arglist__6930);
var type_fs = cljs.core.rest(arglist__6930);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__6931){var vec__6933 = p__6931;var update_event_BANG_ = cljs.core.nth.call(null,vec__6933,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3543__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__6931 = null;if (arguments.length > 2) {
  p__6931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__6931);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6934){
var node = cljs.core.first(arglist__6934);
arglist__6934 = cljs.core.next(arglist__6934);
var event_type = cljs.core.first(arglist__6934);
var p__6931 = cljs.core.rest(arglist__6934);
return fire_BANG___delegate(node,event_type,p__6931);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map