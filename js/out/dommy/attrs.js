// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3531__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3531__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3531__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__6935 = (i + class$.length);
start_from = G__6935;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___6960 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___6960))
{var class_list_6961 = temp__4124__auto___6960;var seq__6948_6962 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6949_6963 = null;var count__6950_6964 = (0);var i__6951_6965 = (0);while(true){
if((i__6951_6965 < count__6950_6964))
{var class_6966 = cljs.core._nth.call(null,chunk__6949_6963,i__6951_6965);class_list_6961.add(class_6966);
{
var G__6967 = seq__6948_6962;
var G__6968 = chunk__6949_6963;
var G__6969 = count__6950_6964;
var G__6970 = (i__6951_6965 + (1));
seq__6948_6962 = G__6967;
chunk__6949_6963 = G__6968;
count__6950_6964 = G__6969;
i__6951_6965 = G__6970;
continue;
}
} else
{var temp__4126__auto___6971 = cljs.core.seq.call(null,seq__6948_6962);if(temp__4126__auto___6971)
{var seq__6948_6972__$1 = temp__4126__auto___6971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6948_6972__$1))
{var c__4299__auto___6973 = cljs.core.chunk_first.call(null,seq__6948_6972__$1);{
var G__6974 = cljs.core.chunk_rest.call(null,seq__6948_6972__$1);
var G__6975 = c__4299__auto___6973;
var G__6976 = cljs.core.count.call(null,c__4299__auto___6973);
var G__6977 = (0);
seq__6948_6962 = G__6974;
chunk__6949_6963 = G__6975;
count__6950_6964 = G__6976;
i__6951_6965 = G__6977;
continue;
}
} else
{var class_6978 = cljs.core.first.call(null,seq__6948_6972__$1);class_list_6961.add(class_6978);
{
var G__6979 = cljs.core.next.call(null,seq__6948_6972__$1);
var G__6980 = null;
var G__6981 = (0);
var G__6982 = (0);
seq__6948_6962 = G__6979;
chunk__6949_6963 = G__6980;
count__6950_6964 = G__6981;
i__6951_6965 = G__6982;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_6983 = elem__$1.className;var seq__6952_6984 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__6953_6985 = null;var count__6954_6986 = (0);var i__6955_6987 = (0);while(true){
if((i__6955_6987 < count__6954_6986))
{var class_6988 = cljs.core._nth.call(null,chunk__6953_6985,i__6955_6987);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6983,class_6988)))
{} else
{elem__$1.className = (((class_name_6983 === ""))?class_6988:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6983)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_6988)));
}
{
var G__6989 = seq__6952_6984;
var G__6990 = chunk__6953_6985;
var G__6991 = count__6954_6986;
var G__6992 = (i__6955_6987 + (1));
seq__6952_6984 = G__6989;
chunk__6953_6985 = G__6990;
count__6954_6986 = G__6991;
i__6955_6987 = G__6992;
continue;
}
} else
{var temp__4126__auto___6993 = cljs.core.seq.call(null,seq__6952_6984);if(temp__4126__auto___6993)
{var seq__6952_6994__$1 = temp__4126__auto___6993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6952_6994__$1))
{var c__4299__auto___6995 = cljs.core.chunk_first.call(null,seq__6952_6994__$1);{
var G__6996 = cljs.core.chunk_rest.call(null,seq__6952_6994__$1);
var G__6997 = c__4299__auto___6995;
var G__6998 = cljs.core.count.call(null,c__4299__auto___6995);
var G__6999 = (0);
seq__6952_6984 = G__6996;
chunk__6953_6985 = G__6997;
count__6954_6986 = G__6998;
i__6955_6987 = G__6999;
continue;
}
} else
{var class_7000 = cljs.core.first.call(null,seq__6952_6994__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_6983,class_7000)))
{} else
{elem__$1.className = (((class_name_6983 === ""))?class_7000:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6983)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7000)));
}
{
var G__7001 = cljs.core.next.call(null,seq__6952_6994__$1);
var G__7002 = null;
var G__7003 = (0);
var G__7004 = (0);
seq__6952_6984 = G__7001;
chunk__6953_6985 = G__7002;
count__6954_6986 = G__7003;
i__6955_6987 = G__7004;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__7005__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6956_7006 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6957_7007 = null;var count__6958_7008 = (0);var i__6959_7009 = (0);while(true){
if((i__6959_7009 < count__6958_7008))
{var c_7010 = cljs.core._nth.call(null,chunk__6957_7007,i__6959_7009);add_class_BANG_.call(null,elem__$1,c_7010);
{
var G__7011 = seq__6956_7006;
var G__7012 = chunk__6957_7007;
var G__7013 = count__6958_7008;
var G__7014 = (i__6959_7009 + (1));
seq__6956_7006 = G__7011;
chunk__6957_7007 = G__7012;
count__6958_7008 = G__7013;
i__6959_7009 = G__7014;
continue;
}
} else
{var temp__4126__auto___7015 = cljs.core.seq.call(null,seq__6956_7006);if(temp__4126__auto___7015)
{var seq__6956_7016__$1 = temp__4126__auto___7015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6956_7016__$1))
{var c__4299__auto___7017 = cljs.core.chunk_first.call(null,seq__6956_7016__$1);{
var G__7018 = cljs.core.chunk_rest.call(null,seq__6956_7016__$1);
var G__7019 = c__4299__auto___7017;
var G__7020 = cljs.core.count.call(null,c__4299__auto___7017);
var G__7021 = (0);
seq__6956_7006 = G__7018;
chunk__6957_7007 = G__7019;
count__6958_7008 = G__7020;
i__6959_7009 = G__7021;
continue;
}
} else
{var c_7022 = cljs.core.first.call(null,seq__6956_7016__$1);add_class_BANG_.call(null,elem__$1,c_7022);
{
var G__7023 = cljs.core.next.call(null,seq__6956_7016__$1);
var G__7024 = null;
var G__7025 = (0);
var G__7026 = (0);
seq__6956_7006 = G__7023;
chunk__6957_7007 = G__7024;
count__6958_7008 = G__7025;
i__6959_7009 = G__7026;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7005 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7005__delegate.call(this,elem,classes,more_classes);};
G__7005.cljs$lang$maxFixedArity = 2;
G__7005.cljs$lang$applyTo = (function (arglist__7027){
var elem = cljs.core.first(arglist__7027);
arglist__7027 = cljs.core.next(arglist__7027);
var classes = cljs.core.first(arglist__7027);
var more_classes = cljs.core.rest(arglist__7027);
return G__7005__delegate(elem,classes,more_classes);
});
G__7005.cljs$core$IFn$_invoke$arity$variadic = G__7005__delegate;
return G__7005;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__7028 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__7028;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7037 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7037))
{var class_list_7038 = temp__4124__auto___7037;class_list_7038.remove(class$__$1);
} else
{var class_name_7039 = elem__$1.className;var new_class_name_7040 = dommy.attrs.remove_class_str.call(null,class_name_7039,class$__$1);if((class_name_7039 === new_class_name_7040))
{} else
{elem__$1.className = new_class_name_7040;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7041__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7033 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7034 = null;var count__7035 = (0);var i__7036 = (0);while(true){
if((i__7036 < count__7035))
{var c = cljs.core._nth.call(null,chunk__7034,i__7036);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7042 = seq__7033;
var G__7043 = chunk__7034;
var G__7044 = count__7035;
var G__7045 = (i__7036 + (1));
seq__7033 = G__7042;
chunk__7034 = G__7043;
count__7035 = G__7044;
i__7036 = G__7045;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7033);if(temp__4126__auto__)
{var seq__7033__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7033__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__7033__$1);{
var G__7046 = cljs.core.chunk_rest.call(null,seq__7033__$1);
var G__7047 = c__4299__auto__;
var G__7048 = cljs.core.count.call(null,c__4299__auto__);
var G__7049 = (0);
seq__7033 = G__7046;
chunk__7034 = G__7047;
count__7035 = G__7048;
i__7036 = G__7049;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7033__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7050 = cljs.core.next.call(null,seq__7033__$1);
var G__7051 = null;
var G__7052 = (0);
var G__7053 = (0);
seq__7033 = G__7050;
chunk__7034 = G__7051;
count__7035 = G__7052;
i__7036 = G__7053;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__7041 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7041__delegate.call(this,elem,class$,classes);};
G__7041.cljs$lang$maxFixedArity = 2;
G__7041.cljs$lang$applyTo = (function (arglist__7054){
var elem = cljs.core.first(arglist__7054);
arglist__7054 = cljs.core.next(arglist__7054);
var class$ = cljs.core.first(arglist__7054);
var classes = cljs.core.rest(arglist__7054);
return G__7041__delegate(elem,class$,classes);
});
G__7041.cljs$core$IFn$_invoke$arity$variadic = G__7041__delegate;
return G__7041;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7055 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7055))
{var class_list_7056 = temp__4124__auto___7055;class_list_7056.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7059){var vec__7060 = p__7059;var k = cljs.core.nth.call(null,vec__7060,(0),null);var v = cljs.core.nth.call(null,vec__7060,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7067_7073 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7068_7074 = null;var count__7069_7075 = (0);var i__7070_7076 = (0);while(true){
if((i__7070_7076 < count__7069_7075))
{var vec__7071_7077 = cljs.core._nth.call(null,chunk__7068_7074,i__7070_7076);var k_7078 = cljs.core.nth.call(null,vec__7071_7077,(0),null);var v_7079 = cljs.core.nth.call(null,vec__7071_7077,(1),null);(style[cljs.core.name.call(null,k_7078)] = v_7079);
{
var G__7080 = seq__7067_7073;
var G__7081 = chunk__7068_7074;
var G__7082 = count__7069_7075;
var G__7083 = (i__7070_7076 + (1));
seq__7067_7073 = G__7080;
chunk__7068_7074 = G__7081;
count__7069_7075 = G__7082;
i__7070_7076 = G__7083;
continue;
}
} else
{var temp__4126__auto___7084 = cljs.core.seq.call(null,seq__7067_7073);if(temp__4126__auto___7084)
{var seq__7067_7085__$1 = temp__4126__auto___7084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7067_7085__$1))
{var c__4299__auto___7086 = cljs.core.chunk_first.call(null,seq__7067_7085__$1);{
var G__7087 = cljs.core.chunk_rest.call(null,seq__7067_7085__$1);
var G__7088 = c__4299__auto___7086;
var G__7089 = cljs.core.count.call(null,c__4299__auto___7086);
var G__7090 = (0);
seq__7067_7073 = G__7087;
chunk__7068_7074 = G__7088;
count__7069_7075 = G__7089;
i__7070_7076 = G__7090;
continue;
}
} else
{var vec__7072_7091 = cljs.core.first.call(null,seq__7067_7085__$1);var k_7092 = cljs.core.nth.call(null,vec__7072_7091,(0),null);var v_7093 = cljs.core.nth.call(null,vec__7072_7091,(1),null);(style[cljs.core.name.call(null,k_7092)] = v_7093);
{
var G__7094 = cljs.core.next.call(null,seq__7067_7085__$1);
var G__7095 = null;
var G__7096 = (0);
var G__7097 = (0);
seq__7067_7073 = G__7094;
chunk__7068_7074 = G__7095;
count__7069_7075 = G__7096;
i__7070_7076 = G__7097;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7098){
var elem = cljs.core.first(arglist__7098);
var kvs = cljs.core.rest(arglist__7098);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7105_7111 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7106_7112 = null;var count__7107_7113 = (0);var i__7108_7114 = (0);while(true){
if((i__7108_7114 < count__7107_7113))
{var vec__7109_7115 = cljs.core._nth.call(null,chunk__7106_7112,i__7108_7114);var k_7116 = cljs.core.nth.call(null,vec__7109_7115,(0),null);var v_7117 = cljs.core.nth.call(null,vec__7109_7115,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7116,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7117)+"px"));
{
var G__7118 = seq__7105_7111;
var G__7119 = chunk__7106_7112;
var G__7120 = count__7107_7113;
var G__7121 = (i__7108_7114 + (1));
seq__7105_7111 = G__7118;
chunk__7106_7112 = G__7119;
count__7107_7113 = G__7120;
i__7108_7114 = G__7121;
continue;
}
} else
{var temp__4126__auto___7122 = cljs.core.seq.call(null,seq__7105_7111);if(temp__4126__auto___7122)
{var seq__7105_7123__$1 = temp__4126__auto___7122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7105_7123__$1))
{var c__4299__auto___7124 = cljs.core.chunk_first.call(null,seq__7105_7123__$1);{
var G__7125 = cljs.core.chunk_rest.call(null,seq__7105_7123__$1);
var G__7126 = c__4299__auto___7124;
var G__7127 = cljs.core.count.call(null,c__4299__auto___7124);
var G__7128 = (0);
seq__7105_7111 = G__7125;
chunk__7106_7112 = G__7126;
count__7107_7113 = G__7127;
i__7108_7114 = G__7128;
continue;
}
} else
{var vec__7110_7129 = cljs.core.first.call(null,seq__7105_7123__$1);var k_7130 = cljs.core.nth.call(null,vec__7110_7129,(0),null);var v_7131 = cljs.core.nth.call(null,vec__7110_7129,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7130,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7131)+"px"));
{
var G__7132 = cljs.core.next.call(null,seq__7105_7123__$1);
var G__7133 = null;
var G__7134 = (0);
var G__7135 = (0);
seq__7105_7111 = G__7132;
chunk__7106_7112 = G__7133;
count__7107_7113 = G__7134;
i__7108_7114 = G__7135;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7136){
var elem = cljs.core.first(arglist__7136);
var kvs = cljs.core.rest(arglist__7136);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7145 = dommy.template.__GT_node_like.call(null,elem);(G__7145[cljs.core.name.call(null,k)] = v);
return G__7145;
} else
{var G__7146 = dommy.template.__GT_node_like.call(null,elem);G__7146.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__7146;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7153__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7147_7154 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__7148_7155 = null;var count__7149_7156 = (0);var i__7150_7157 = (0);while(true){
if((i__7150_7157 < count__7149_7156))
{var vec__7151_7158 = cljs.core._nth.call(null,chunk__7148_7155,i__7150_7157);var k_7159__$1 = cljs.core.nth.call(null,vec__7151_7158,(0),null);var v_7160__$1 = cljs.core.nth.call(null,vec__7151_7158,(1),null);set_attr_BANG_.call(null,elem__$1,k_7159__$1,v_7160__$1);
{
var G__7161 = seq__7147_7154;
var G__7162 = chunk__7148_7155;
var G__7163 = count__7149_7156;
var G__7164 = (i__7150_7157 + (1));
seq__7147_7154 = G__7161;
chunk__7148_7155 = G__7162;
count__7149_7156 = G__7163;
i__7150_7157 = G__7164;
continue;
}
} else
{var temp__4126__auto___7165 = cljs.core.seq.call(null,seq__7147_7154);if(temp__4126__auto___7165)
{var seq__7147_7166__$1 = temp__4126__auto___7165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7147_7166__$1))
{var c__4299__auto___7167 = cljs.core.chunk_first.call(null,seq__7147_7166__$1);{
var G__7168 = cljs.core.chunk_rest.call(null,seq__7147_7166__$1);
var G__7169 = c__4299__auto___7167;
var G__7170 = cljs.core.count.call(null,c__4299__auto___7167);
var G__7171 = (0);
seq__7147_7154 = G__7168;
chunk__7148_7155 = G__7169;
count__7149_7156 = G__7170;
i__7150_7157 = G__7171;
continue;
}
} else
{var vec__7152_7172 = cljs.core.first.call(null,seq__7147_7166__$1);var k_7173__$1 = cljs.core.nth.call(null,vec__7152_7172,(0),null);var v_7174__$1 = cljs.core.nth.call(null,vec__7152_7172,(1),null);set_attr_BANG_.call(null,elem__$1,k_7173__$1,v_7174__$1);
{
var G__7175 = cljs.core.next.call(null,seq__7147_7166__$1);
var G__7176 = null;
var G__7177 = (0);
var G__7178 = (0);
seq__7147_7154 = G__7175;
chunk__7148_7155 = G__7176;
count__7149_7156 = G__7177;
i__7150_7157 = G__7178;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7153 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7153__delegate.call(this,elem,k,v,kvs);};
G__7153.cljs$lang$maxFixedArity = 3;
G__7153.cljs$lang$applyTo = (function (arglist__7179){
var elem = cljs.core.first(arglist__7179);
arglist__7179 = cljs.core.next(arglist__7179);
var k = cljs.core.first(arglist__7179);
arglist__7179 = cljs.core.next(arglist__7179);
var v = cljs.core.first(arglist__7179);
var kvs = cljs.core.rest(arglist__7179);
return G__7153__delegate(elem,k,v,kvs);
});
G__7153.cljs$core$IFn$_invoke$arity$variadic = G__7153__delegate;
return G__7153;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7188__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7184_7189 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7185_7190 = null;var count__7186_7191 = (0);var i__7187_7192 = (0);while(true){
if((i__7187_7192 < count__7186_7191))
{var k_7193__$1 = cljs.core._nth.call(null,chunk__7185_7190,i__7187_7192);remove_attr_BANG_.call(null,elem__$1,k_7193__$1);
{
var G__7194 = seq__7184_7189;
var G__7195 = chunk__7185_7190;
var G__7196 = count__7186_7191;
var G__7197 = (i__7187_7192 + (1));
seq__7184_7189 = G__7194;
chunk__7185_7190 = G__7195;
count__7186_7191 = G__7196;
i__7187_7192 = G__7197;
continue;
}
} else
{var temp__4126__auto___7198 = cljs.core.seq.call(null,seq__7184_7189);if(temp__4126__auto___7198)
{var seq__7184_7199__$1 = temp__4126__auto___7198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7184_7199__$1))
{var c__4299__auto___7200 = cljs.core.chunk_first.call(null,seq__7184_7199__$1);{
var G__7201 = cljs.core.chunk_rest.call(null,seq__7184_7199__$1);
var G__7202 = c__4299__auto___7200;
var G__7203 = cljs.core.count.call(null,c__4299__auto___7200);
var G__7204 = (0);
seq__7184_7189 = G__7201;
chunk__7185_7190 = G__7202;
count__7186_7191 = G__7203;
i__7187_7192 = G__7204;
continue;
}
} else
{var k_7205__$1 = cljs.core.first.call(null,seq__7184_7199__$1);remove_attr_BANG_.call(null,elem__$1,k_7205__$1);
{
var G__7206 = cljs.core.next.call(null,seq__7184_7199__$1);
var G__7207 = null;
var G__7208 = (0);
var G__7209 = (0);
seq__7184_7189 = G__7206;
chunk__7185_7190 = G__7207;
count__7186_7191 = G__7208;
i__7187_7192 = G__7209;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7188 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7188__delegate.call(this,elem,k,ks);};
G__7188.cljs$lang$maxFixedArity = 2;
G__7188.cljs$lang$applyTo = (function (arglist__7210){
var elem = cljs.core.first(arglist__7210);
arglist__7210 = cljs.core.next(arglist__7210);
var k = cljs.core.first(arglist__7210);
var ks = cljs.core.rest(arglist__7210);
return G__7188__delegate(elem,k,ks);
});
G__7188.cljs$core$IFn$_invoke$arity$variadic = G__7188__delegate;
return G__7188;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7212 = dommy.template.__GT_node_like.call(null,elem);G__7212.style.display = ((show_QMARK_)?"":"none");
return G__7212;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7214 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7214,false);
return G__7214;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7216 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7216,true);
return G__7216;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7218 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7218["constructor"] = Object);
return G__7218;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map