/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').strictEqual, ifFun = require('if-fun'),
  obj2str = Object.prototype.toString;

function half(x) { return x / 2; }
eq(ifFun(half),     half);
eq(ifFun(String),   String);

eq(ifFun(undefined),  undefined);
eq(ifFun(null),       undefined);
eq(ifFun(false),      undefined);

eq(ifFun(undefined, 123), 123);
eq(ifFun(null,      123), 123);
eq(ifFun(false,     123), 123);
eq(ifFun(123,       456), 456);

eq(ifFun(half, 123)(456), 228);
eq(ifFun(123, half)(456), 228);

async function promiseNothing() { return; }
eq(obj2str.call(promiseNothing), '[object AsyncFunction]');
eq(typeof promiseNothing, 'function');
eq(ifFun(promiseNothing), promiseNothing);

(function checkMapIterator() {
  const mapKeysIter = (new Map()).keys();
  eq(ifFun(mapKeysIter, 'nope'), 'nope');

  const nextKey = mapKeysIter.next;
  eq(obj2str.call(nextKey), '[object Function]');
  eq(typeof nextKey, 'function');
  eq(ifFun(nextKey), nextKey);
}());


console.log('+OK usage test passed');
