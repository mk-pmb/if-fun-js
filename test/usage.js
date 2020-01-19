/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').strictEqual, ifFun = require('if-fun');

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

console.log('+OK usage test passed');
