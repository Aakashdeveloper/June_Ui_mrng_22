//es5
//let myObj = require('./first');
//es6
import myObj from './first';

console.log(myObj.user)

console.log(myObj.dbQuery.find('Employee'))

// [ { name: 'Alvin', city: 'Boston' }, { name: 'Nikita', city: 'Pune' } ]
// Select * from Employee