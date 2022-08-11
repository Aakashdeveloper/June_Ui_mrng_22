class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return  `Say hi to ${this.name}`
    }
}

let french = new language1('French','Frannce')
undefined
french
language1 {name: 'French', country: 'Frannce', greet: ƒ}
french.greet()
'Say hi to French'