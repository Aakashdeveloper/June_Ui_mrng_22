//array is the collection of homogeneous datatype as  well as hetrogenious

var a = [1,9,4545,44,5352,4,8,4,4334]
var b = ["aa","uhhgu",'jkhjh','jhjh']
var c = [true,true,false,true]
var d = ["jkh",true,56,767, "jhjg",false,true]

var a = [1,9,4545,44,5352,4,8,4,4334]
undefined
typeof(a)
'object'
var d = ["jkh",true,56,767, "jhjg",false,true]
undefined
typeof(d)
'object'


var city = ["Delhi","Mumbai","London","Amsterdam","Venice"]
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'

var city = ["Delhi","Mumbai","London","Amsterdam","Venice"]

undefined
city.push('Pune')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Pune']
city.push('Boston')
7
city
(7) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Pune', 'Boston']


var city = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Pune', 'Boston']

city.pop()
'Boston'
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Pune']
city.pop(3)
'Pune'
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.pop(1000)
'Venice'

var city = ["Delhi","Mumbai","London","Amsterdam","Venice"]
city.unshift('Dubai')
6
city
(6) ['Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.unshift('Helsinki')
7
city
(7) ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.shift()
'Helsinki'

push > Add in the end of Array
pop > Remove the last value of array
unshift> Add first value to array
shift > Remove first value of array

var city = ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.slice(1)
(6) ['Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.slice(2)
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city
(7) ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.slice(2,5)
(3) ['Delhi', 'Mumbai', 'London']
city.slice(-1)
['Venice']
city.slice(0,-1)
(6) ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam']

var city = ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.splice(start,deletecount, value)

// remove one value form index number 2
city.splice(2,1)

// Add 2 value form index number 4
city.splice(4,0,'Hongkong','Keev')
(8) ['Helsinki', 'Dubai', 'Mumbai', 'London', 'Hongkong', 'Keev', 'Amsterdam', 'Venice']

//On index 3 remove 1 value and add 2
city.splice(3,1,'Indore','Dublin')
['London']
city
(9) ['Helsinki', 'Dubai', 'Mumbai', 'Indore', 'Dublin', 'Hongkong', 'Keev', 'Amsterdam', 'Venice']

var city = ['Helsinki', 'Dubai', 'Delhi', 'Mumbai', 'London']
        
city.indexOf('Mumbai')
3
city.indexOf('Helsinki')
0
city.indexOf('London')
4
city.indexOf('Venice')
-1
city.indexOf('Pune')
-1

var a = ['a','b','c',1]
var b = [1,2,3,'d']
a+b
'a,b,c,11,2,3,d'
a.concat(b)
(8) ['a', 'b', 'c', 1, 1, 2, 3, 'd']


var a = "Hiii"
var b = ["Hiii"]
undefined
typeof(a)
'string'
typeof(b)
'object'
Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Helsinki', 'Dubai',['Red','Yellow','Green',['Audi','BMW','Merc'],'Orange'], 'Delhi', 'Mumbai', 'London']
city[1]
'Dubai'
city[2]
(5) ['Red', 'Yellow', 'Green', Array(3), 'Orange']
city[2][0]
'Red'
city[2][1]
'Yellow'
city[2][3]
(3) ['Audi', 'BMW', 'Merc']
city[2][3][0]
'Audi'

var a =[ [1, 1 ,1], [4,6,7], [6,7,4] ]

var city = ['Helsinki', 'Dubai',['Red','Yellow','Green',['Audi','BMW','Merc'],'Orange'], 'Delhi', 'Mumbai', 'London']

city.flat()
(10) ['Helsinki', 'Dubai', 'Red', 'Yellow', 'Green', Array(3), 'Orange', 'Delhi', 'Mumbai', 'London']
city.flat(2)
(12) ['Helsinki', 'Dubai', 'Red', 'Yellow', 'Green', 'Audi', 'BMW', 'Merc', 'Orange', 'Delhi', 'Mumbai', 'London']