/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a,b){
    return a + b;
}
let sum = addTwoNumbers(5,5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(5,5);
console.log(sum2);

// Single Line Arrow Function With Parameters
// cpnst addTwoNumbers = (a,b) => (a + b); also valid way to write short arrow function
const addTwoNumbers3 = (a,b) => a + b;
let sum3= addTwoNumbers3(7, 7);
console.log(sum3);

// Implicit Returns
// no need for brackets if only one parameter
const saySomething = message => console.log(message);
saySomething('hello world!');   

// if no parameters, () must be used to let JS know it is a function
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string
    </p>`
)
console.log(returnMultipleLines());