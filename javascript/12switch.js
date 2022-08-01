//ifelse > multiple condition and multiple output
//ternary > single condition and single output
//switch > single condition and multiple output

let uname = "Aakash"

switch(uname){
    case "Aakash":
        console.log(`Hi 1 ${uname}`)
        break;
    case "Bhumika":
        console.log(`Hi 2 ${uname}`)
        break;
    case "Arun":
        console.log(`Hi 3 ${uname}`)
        break;
    default:
        console.log(`Hi ${uname} Default`)
}

let a = 10;
switch(a%2){
    case 0:
        console.log(`Number ${a} is even`);
        break;
    case 1:
        console.log(`Number ${a} is odd`);
        break;
    default:
        console.log(`Unknown`)
}
