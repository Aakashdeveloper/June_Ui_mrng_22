Map
> map is use to iterate over the array
> it always return the same length of output array as input
> it is use to apply logics(add,sub,mul,div, bind in html)

var a = [4,56,9,11,7,34,16,23,9,6,18,27]

a.map((data) => {return data*2})
[8, 112, 18, 22, 14, 68, 32, 46, 18, 12, 36, 54]


var a = [4,56,9,11]
a.map((data) => {return `<p>${data}</p>`})
['<p>4</p>', '<p>56</p>', '<p>9</p>', '<p>11</p>']

Filter
> filter is use to filter out the value
> it may or maynot return same length of output array as input
> it only return those for which condition or output is true


var a = [4,56,9,11,7,34,16,23,9,6,18,27]

a.filter((data) => {return data>20})

var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
[-2, 0, 2, 4, 6]

var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
(4) [-1, 1, 2, 3]