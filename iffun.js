/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
/*globals define:true*/
(function () {
  'use strict';
  var obj2str = Object.prototype.toString;

  function ifFun(x, no) {
    if (!x) { return no; }
    var t = typeof x;
    if (t === 'function') { return x; }
    if (t !== 'object') { return no; }
    if (!x.call) { return no; }
    if (!x.apply) { return no; }
    t = obj2str.call(x);
    if (t.slice(0, 8) !== '[object ') { return no; }
    if (t.slice(-9) !== 'Function]') { return no; }
    return x;
  }




  (function (e) { // UMD export
    /*global define: true */
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function () { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(ifFun));
}());
