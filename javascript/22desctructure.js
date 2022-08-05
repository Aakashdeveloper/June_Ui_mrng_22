  { uname:uname }
        ||
    { uname }

var [a,b] = [10,20]
a
10
b
20

var a = [7,8,9]
var [c,d] = a
c
7
d
8

function test(){
    return [1,2,3]
}

let [g,h] = test()
g
1
h
2

var y = {1:10,m:20}
var {1:abc,m:def} = y
abc
10
def
20