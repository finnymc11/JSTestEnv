//variables
let username = 'Finbar'; //string literal
let age = 22; //number literal
let isValid = true; //boolean literal
let something; //undefined
let unknown = null; //object

console.log(typeof age);

//object
let person = {
    name: 'Finbar',
    age: 22
};

console.log(person);

//dot notation
person.name = 'John';

//bracket notation
person['name'] = 'Mary';

//using let
let selection = 'name';
person[selection] = 'Mary';

console.log(person);

//arrays
let fruits = ['apple', 'banana', 'orange'];
fruits[3] = 'pear';
console.log(fruits); 
console.log('2nd fruit is ' + fruits[1]);
console.log('there are ' + fruits.length + ' fruits');

//functions
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName); 
}

greet('finbar', 'mccarron');
greet('john', 'smith');

//square
function square(num) {
    return num*num;
}

console.log(square(4));