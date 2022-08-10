var calc = {
    sum:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}

calc.sum(6,3)
9
calc.sub(6,3)
3
calc.sum(61,3)
64

let dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data)=>{return `insert into ${table} name,city values (${data.name},${data.city})`}
}

dbQuery.find('User')
'Select * from User'
dbQuery.insert('Students',{name:'John',city:'Keev'})
'insert into Students name,city values (John,Keev)'