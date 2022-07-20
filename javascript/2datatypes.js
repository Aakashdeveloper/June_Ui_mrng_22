var a = true
var b = false

true+true
2
true+false
1
10+true
11
10/false
Infinity

true is equal to 1
false is equal to 0
"hi"+true
'hitrue'
true-true
0
true-"true"
NaN

///////////////////
var a = "10"
var b = 1
parseInt(a)+b
11
var b = "2"
undefined
parseInt(a)+parseInt(b)
12
parseInt(a)
10

var a = "aa"
parseInt(a)
NaN

var a = "10.2"
var b = "20.1"
parseInt(a)+parseInt(b)
30

parseFloat(a)+parseFloat(b)
30.3

//es6
Number(a)+Number(b)
30.3
var a = "10"
var b = "1"
Number(a)+Number(b)
11

var a = "delhi123"
var b = "123delhi"
var c = "123delhi456"
parseInt(a)
NaN
parseInt(b)
123
parseInt(c)
123

var a = "delhi123"
var b = "123delhi"
var c = "123delhi456"
Number(a)
NaN
Number(b)
NaN
Number(c)
NaN