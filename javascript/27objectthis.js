// let firstName = "Michal"
// let lastName = "Peter"

// let sayHi = {
//     firstName:"Zoe",
//     lastName:'lisa',
//     greet:()=>{
//         return `Say hi to ${firstName} ${lastName}`}
// }

// console.log(sayHi.greet())

//Say hi to Michal Peter

let firstName = "Michal"
let lastName = "Peter"

let sayHi = {
    firstName:"Zoe",
    lastName:'lisa',
    greet:function(){
        return `Say hi to ${this.firstName} ${this.lastName}`}
}

console.log(sayHi.greet())
//Say hi to Zoe lisa