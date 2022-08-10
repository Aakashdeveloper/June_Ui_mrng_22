function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say hi to ${name}`}
}

let Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say hi to Hindi'
let French = new language('French','France')
undefined
French
language {name: 'French', country: 'France', greet: ƒ}