if(condition){
    // do something
}else{
    //do something
}

var a = 10
if(a%2 == 0 ){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM29:3 Number 10 is even

var a = 11
if(a%2 == 0 ){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM38:5 Number 11 is odd

let name = "Aakash"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "Aakash"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

////////////////
let name = "Aakash"
let role = "User"

if(role == "Admin"){
    if(name == "Nikita"){
        console.log(`Hi ${name} you are user`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else if(role == "User"){
    if(name == "Aakash"){
        console.log(`Hi ${name} you are user`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else{
    console.log(`Hi ${name} you are unknown`)
}

if(name == "Tina" && (role == "Admin" || role == "User")){
    console.log(`Hi ${name} you are Welcome`)
}else{
    console.log(`Hi ${name} you are Unknown`)
}


let d = 1
if(d){
    console.log('Hii')
}else{
    console.log('Bie')
}
Hii


let b = 0
if(b){
    console.log('Hii')
}else{
    console.log('Bie')
}
Bie

let c = -1
if(c){
    console.log('Hii')
}else{
    console.log('Bie')
}
Hii

///////////////////Ternary operator/////
(single line if else)


condition ? "if condition is true" : "if condition is false"

let e = 20;
e > 20 ? "Hiii":"Biee"
'Biee'

let f = 22;
f > 20 ? "Hiii":"Biee"
'Hiii'

var a = 10
a > 10 ? a+1:a-1
9
var a = 10
a < 10 ? a+1:a-1
9
var a = 10
a == 10 ? a+1:a-1
11