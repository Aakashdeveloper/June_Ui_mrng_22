var input = [1,2,3,4];

function add(a,b,c,d){
    return a+b+c+d
}
add(input)
'1,2,3,4undefinedundefinedundefined'
add(...input)
10

... in calling of function it is spread
... in parameter is rest


function add(...args){  //// rest
    let out = 0;
    for(data of args){
        out +=data
    }
    return out
}

 var input = [1,2,3,4];

 add(...input) //spread


 var a = [1,2,3,4];
 var b = ['a','b','c']


var a = [1,2,3,4];
var b = ['a','b','c']
undefined
var c = [...a,...b]
undefined
c
[1, 2, 3, 4, 'a', 'b', 'c']


var a = [1,2,3,4];
var b = ['a','b','c']
var c = [...a,...b]
c
[1, 2, 3, 4, 'a', 'b', 'c']

var d = [...c,5]
d
[1, 2, 3, 4, 'a', 'b', 'c', 5]