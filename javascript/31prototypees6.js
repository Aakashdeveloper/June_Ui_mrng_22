class geo{
    constructor(){
        this.lat = 41.11;
        this.long = 43.23;
    }
}

class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return  `Say hi to ${this.name}`
    }
}

let french = new language1('French','Frannce')

console.log(french)

// language1 {
//     lat: 41.11,
//     long: 43.23,
//     greet: [Function: greet],
//     name: 'French',
//     country: 'Frannce'
//   }