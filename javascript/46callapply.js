let person = {
    fullName:function(){
        return this.firstName+" "+this.lastName
    }
}

let john = {
    firstName:'John',
    lastName:'Dave'
}

person.fullName.call(john)
'John Dave'
person.fullName.apply(john)
'John Dave'

let person1 = {
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+" "+city+" "+country
    }
}

let john1 = {
    firstName:'John',
    lastName:'Dave'
}


person1.fullName.call(john1)
'John Dave undefined undefined'
person1.fullName.call(john1,'Delhi','India')
'John Dave Delhi India'
person1.fullName.apply(john1,'Delhi','India')
VM342:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:18
(anonymous) @ VM342:1

person1.fullName.call(john1,['Delhi','India'])
'John Dave Delhi,India undefined'
person1.fullName.apply(john1,['Delhi','India'])
'John Dave Delhi India'