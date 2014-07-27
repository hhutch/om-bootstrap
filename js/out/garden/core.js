// Compiled by ClojureScript 0.0-2277
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
goog.require('garden.compiler');
/**
* Convert a variable number of Clojure data structure to a string of
* CSS. The first argument may be a list of flags for the compiler.
* @param {...*} var_args
*/
garden.core.css = (function() { 
var css__delegate = function (rules){return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
};
var css = function (var_args){
var rules = null;if (arguments.length > 0) {
  rules = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return css__delegate.call(this,rules);};
css.cljs$lang$maxFixedArity = 0;
css.cljs$lang$applyTo = (function (arglist__7753){
var rules = cljs.core.seq(arglist__7753);
return css__delegate(rules);
});
css.cljs$core$IFn$_invoke$arity$variadic = css__delegate;
return css;
})()
;
/**
* Convert a variable number of maps into a string of CSS for use with
* the HTML `style` attribute.
* @param {...*} var_args
*/
garden.core.style = (function() { 
var style__delegate = function (maps){return garden.compiler.compile_style.call(null,maps);
};
var style = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,maps);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__7754){
var maps = cljs.core.seq(arglist__7754);
return style__delegate(maps);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

//# sourceMappingURL=core.js.map