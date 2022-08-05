//local scope
//global scope
// enclosig something

// var a = 10;
// function add(){
//     var b = 20;
//     return a+b
// }

// console.log("add>>>>",add())
// console.log("a>>>>",a)
// console.log("b>>>>",b)

// add>>>> 30
// a>>>> 10
// /Users/aakash/Desktop/api/June/june_ui_mrng/javascript/20clousers.js:13
// console.log("b>>>>",b)
                    
var a = 10;
for(i=0;i<5;i++){
    let b = 20;
    console.log(a+b+i)
}

console.log("a>>>>",a)
console.log("b>>>>",b)

// 30
// 31
// 32
// 33
// 34
// a>>>> 10
// b>>>> 20
////////////////////////////////////////////////////////////////
function mul(a,b,c){
    return a*b*c
}
mul(2,3,4)


function mul(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

mul(2)(3)(4)
24