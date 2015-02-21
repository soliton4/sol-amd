(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

if (promiseland._hasModule({ hashStr: "3dc162c6c3247b3e2daadc056b2b3609" })){ return promiseland._getModule("3dc162c6c3247b3e2daadc056b2b3609"); };
var PL$1 = (function(){
"use strict";

  ;
  return {
    "endsWith": (function(PL$2/*parStr*/, PL$3/*parEndsWith*/){
    
      ;
      if((PL$2/*parStr*/["substr"]((PL$2/*parStr*/["length"] - PL$3/*parEndsWith*/["length"])) == PL$3/*parEndsWith*/)){
        return true;
      };
      ;
      return false;
      ;}),
    "startsWith": (function(PL$2/*parStr*/, PL$4/*parStartsWith*/){
    
      ;
      if((PL$2/*parStr*/["substr"](0, PL$4/*parStartsWith*/["length"]) == PL$4/*parStartsWith*/)){
        return true;
      };
      ;
      return false;
      ;}),
    "cutEnd": (function(PL$2/*parStr*/, PL$5/*parLen*/){
    
      ;
      return PL$2/*parStr*/["substr"](0, (PL$2/*parStr*/["length"] - PL$5/*parLen*/));
      ;}),
    "cutStart": (function(PL$2/*parStr*/, PL$5/*parLen*/){
    
      ;
      return PL$2/*parStr*/["substr"](PL$5/*parLen*/);
      ;})
  };
  ;})();
;return PL$1;
});
})();