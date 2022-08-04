regular expression
^$

//if pattern match you will get the array else you will get null

var a = "hii"
a.match("^([a-z])$")
null

// single letter
var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]


// 2 letters
var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

// range 2 to 5
var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]
var a = "h"
a.match("^([a-z]{2,5})$")
null

// any length
var a = "hii"
a.match("^([a-z]+)$")


var a = "hii3"
a.match("^([a-z0-9]+)$")
(2) ['hii3', 'hii3', index: 0, input: 'hii3', groups: undefined]
var a = "hii3"
a.match("^([a-z0-9$#]+)$")
(2) ['hii3', 'hii3', index: 0, input: 'hii3', groups: undefined]
var a = "hii3&"
a.match("^([a-z0-9$#]+)$")
null
var a = "hii3$"
a.match("^([a-z0-9$#]+)$")
(2) ['hii3$', 'hii3$', index: 0, input: 'hii3$', groups: undefined]

var b = 9876546730
b.match("^([0-9]{10})$")
VM157:2 Uncaught TypeError: b.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM157:2

var b = 9876546730
b.toString().match("^([0-9]{10})$")
(2) ['9876546730', '9876546730', index: 0, input: '9876546730', groups: undefined]

var str ="this hat is hot haat"
str.match(/h.t/g)
['hat', 'hot']
str.match(/h..t/g)
['haat']

var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@(gmail)\.([a-zA-Z]{2,5})$")
null
var email = "a@gmail.com";
email.match("^([a-zA-Z0-9]+)@(gmail)\.([a-zA-Z]{2,5})$")
(4) ['a@gmail.com', 'a', 'gmail', 'com', index: 0, input: 'a@gmail.com', groups: undefined]


var email = "a@a.com";
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")