var city =  "loNDoN"
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'

var city =  "loNDoN"
city.length
6
city.charAt(0)
'l'
city.at(0)
'l'
city.charAt(-1)
''
city.at(-1)
'N'
city.at(-2)
'o'
var city =  "loNDoN"
city[0]
'l'
city[-1]
undefined
city[1]
'o'

var city =  "loNDoN"
city[city.length-1]
'N'
city[city.length-2]
'o'

var name = "  Nikita  "
undefined
name.trim()
'Nikita'
var name = "  Nikita . "
undefined
name.trim()
'Nikita .'

var a = "John"
var b = "john"
a == b
false
a.toUpperCase() == b.toUpperCase()
true

var city = "amSterDAm"
city.charAt(0).toUpperCase()
'A'

var city = "amSterDAm"

city.slice(1)
'mSterDAm'
city.slice(2)
'SterDAm'
city.slice(2,5)
'Ste'
city.slice(1,6)
'mSter'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,-1)
'amSterDA'
city.slice(0,-2)
'amSterD'
city.slice(1,-2)
'mSterD'
city.slice(-2,1)
''


var city = "amSterDAm"
city.charAt(0).toUpperCase()
'A'
a.slice(1).toLowerCase()
city.slice(1).toLowerCase()
'msterdam'

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRIS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a= "I am learning JavaScript"
a.replace('JavaScript','JS')
'I am learning JS'
var a= "JavaScript I am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var name = "  Nikita . "
name.replace(/ /g,'')
'Nikita.'
name.replace(/ /g,'-')
'--Nikita-.-'


var url = "https://github.com/Aakashdeveloper/july_react_eveng_22"
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'july_react_eveng_22']
var url = "https://github.com/Aakashdeveloper/july_react_eveng_22"
url.split('/')[4]
'july_react_eveng_22'
var url = "https://github.com/Aakashdeveloper/july_react_eveng_22"
var a = url.split('/')
undefined
a[a.length-1]
'july_react_eveng_22'
var a= "JavaScript I am learning JavaScript"
undefined
a.split(' ')
(5) ['JavaScript', 'I', 'am', 'learning', 'JavaScript']

var a = "JavaScript"
a.split('')
['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,S,c,r,i,p,t'
a.toString().replace(/,/g,'')
'JavaScript'

var a = 10
undefined
a.toString()
'10'
""+a
'10'
var a = "10"

undefined
+a
10
var a = "10.11"

undefined
+a
10.11