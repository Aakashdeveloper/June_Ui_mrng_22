function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.age = 10;
    this.legs = 2
}

human.prototype = new robot()
robot {name: undefined, age: 10, legs: 2}

let amit = new human('Amsterdam','Delhi')
amit
human {name: 'Amsterdam', city: 'Delhi'}city: "Delhi"name: "Amsterdam"[[Prototype]]: robot
amit.age
10
amit.legs
2
john.age