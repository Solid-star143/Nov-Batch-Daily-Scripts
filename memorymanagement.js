console.log(a); //undefined
var a = 20;
console.log(a); //20

console.log(a); //Error


const a = 30;
//At the time of memory allocation,this a will be in TDZ but at the time of code
//Execution this will be assigned with 30

console.log(a); //30
console.log(b); //Error

let b = 60;

console.log(b);
console.log(c);
var c = 40;
console.log(d);