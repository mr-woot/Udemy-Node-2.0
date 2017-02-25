// var obj = {
//     name: 'Tushar'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

var person = '{"name": "Tushar", "age": 25}';

console.log(typeof JSON.parse(person));
console.log(JSON.parse(person));