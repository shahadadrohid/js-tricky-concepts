/*
Data Types
Primitive data types
1. Number
2. string
3. boolean
4. undefined
5. null
6. symbol

Non-Primitive data type
1. Object
*/

let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gelo';
// console.log(a, b);

const x = { job: 'Developer' }
const y = x;
console.log(y, x);
x.job = 'Front end developer';
console.log(y, x);