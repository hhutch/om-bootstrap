// Compiled by ClojureScript 0.0-2277
goog.provide('garden.compression');
goog.require('cljs.core');
/**
* Return a function which when given a string will return a map
* containing the chunk of text matched by re, it's size, and tag.
*/
garden.compression.token_fn = (function token_fn(p__7835){var vec__7837 = p__7835;var tag = cljs.core.nth.call(null,vec__7837,(0),null);var re = cljs.core.nth.call(null,vec__7837,(1),null);return ((function (vec__7837,tag,re){
return (function (s){var temp__4126__auto__ = cljs.core.re_find.call(null,re,s);if(cljs.core.truth_(temp__4126__auto__))
{var chunk = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count.call(null,chunk)], null);
} else
{return null;
}
});
;})(vec__7837,tag,re))
});
/**
* Given an arbitrary number of [tag regex] pairs, return a function
* which when given a string s will return the first matching token of s.
* Token precedence is determined by the order of the pairs. The first
* and last pairs have the highest and lowest precedence respectively.
* @param {...*} var_args
*/
garden.compression.tokenizer = (function() { 
var tokenizer__delegate = function (tags_PLUS_regexes){var fs = cljs.core.map.call(null,garden.compression.token_fn,tags_PLUS_regexes);return ((function (fs){
return (function (s){return cljs.core.some.call(null,((function (fs){
return (function (p1__7838_SHARP_){return p1__7838_SHARP_.call(null,s);
});})(fs))
,fs);
});
;})(fs))
};
var tokenizer = function (var_args){
var tags_PLUS_regexes = null;if (arguments.length > 0) {
  tags_PLUS_regexes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tokenizer__delegate.call(this,tags_PLUS_regexes);};
tokenizer.cljs$lang$maxFixedArity = 0;
tokenizer.cljs$lang$applyTo = (function (arglist__7839){
var tags_PLUS_regexes = cljs.core.seq(arglist__7839);
return tokenizer__delegate(tags_PLUS_regexes);
});
tokenizer.cljs$core$IFn$_invoke$arity$variadic = tokenizer__delegate;
return tokenizer;
})()
;
/**
* Tokenizer used during stylesheet compression.
*/
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null));
/**
* Compress a string of CSS using a basic compressor.
*/
garden.compression.compress_stylesheet = (function compress_stylesheet(stylesheet){var s1 = stylesheet;var s2 = "";while(true){
var temp__4124__auto__ = garden.compression.stylesheet_tokenizer.call(null,s1);if(cljs.core.truth_(temp__4124__auto__))
{var map__7842 = temp__4124__auto__;var map__7842__$1 = ((cljs.core.seq_QMARK_.call(null,map__7842))?cljs.core.apply.call(null,cljs.core.hash_map,map__7842):map__7842);var size = cljs.core.get.call(null,map__7842__$1,new cljs.core.Keyword(null,"size","size",1098693007));var chunk = cljs.core.get.call(null,map__7842__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));var tag = cljs.core.get.call(null,map__7842__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));{
var G__7844 = cljs.core.subs.call(null,s1,size);
var G__7845 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7843 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__7843) {
case "l-brace":
return "}";

break;
case "l-paren":
return ")";

break;
case "space+":
return " ";

break;
case "comma":
return ",";

break;
case "white-space+":
return "";

break;
case "string":
return chunk;

break;
case "colon":
return ":";

break;
case "semi-comma":
return ";";

break;
case "r-brace":
return "{";

break;
case "r-paren":
return "(";

break;
default:
return chunk;

}
})()));
s1 = G__7844;
s2 = G__7845;
continue;
}
} else
{return s2;
}
break;
}
});

//# sourceMappingURL=compression.js.map