
<!--#echo json="package.json" key="name" underline="=" -->
if-fun
======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Returns the first argument if it is a function (regular, async, generator, …),
or your custom fallback value otherwise.
<!--/#echo -->



API
---

This module exports one function:

### ifFun(x[, no])

Return `x` if `x` seems to be some kind of function, otherwise return `no`.
In case `no` is omitted, JavaScript rules makes it default to `undefined`.



Usage
-----

See [test/usage.js](test/usage.js) for examples.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
