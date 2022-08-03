function
method
arrow function
IFFi
generator function
///////////

var a = 10;
var b = 20;
a+b
30

////////////////////////////////
keyword nameoffunction(parameters){
    return value
}

function add(a,b){
    return a+b
} 

add(1,2)
3
add(5,4)
9
add(21,44)
65
add('hiii','javascript')
'hiiijavascript'

function isEven(userInput){
    let out = ''
    if(userInput%2 == 0 ){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(50)
'Number 50 is even';


//method
let add = function(a,b){
    return a+b
} 

//es6  arrow function
let add = (a,b) => {return a+b} 

function add(a,b){
    return a+b
} 

add(1,2,3)
3
add(1)
NaN

///////////
function add(...args){
    console.log(args)
}
add(5,7,1)
[5, 7, 1]

add(5,7,1,6,3,9)
[5, 7, 1, 6, 3, 9]


function add(...args){
   let out = 0;
   for(data of args){
       //out = out+data
       out +=data
   }
   return out
}

add(1,6,8,9)
24
add(1,6)
7
add(1)
1