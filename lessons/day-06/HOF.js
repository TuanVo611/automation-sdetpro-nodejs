/**
 * parameter - recipe
 * HOF (Higher Order Function): parameter - definition of ANOTHER function (call back function) OR RETURN definition of function
 * 
 */

// Difination of OTHER function
function greet(name) {
    console.log(`Hello, ${name}`);
}

function elegantGreet(name) {
    console.log(`Hello there, ${name}`);
}

// HOF:
// I will call you back when i need you:
function hof(callbackFunction) {
    // ...
    //...
    let name = "Tuan"
    callbackFunction(name)
}

hof(greet)
hof(elegantGreet)