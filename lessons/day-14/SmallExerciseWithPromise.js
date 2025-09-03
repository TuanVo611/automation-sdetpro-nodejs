//Data
const todo1Endpoint = "https://jsonplaceholder.typicode.com/todos/1";

//Usage
test(todo1Endpoint);

//Logic - From Controller
function test(url) {
    fetch(url)
        .then(getResponse)
        .then(validateResponse)
}

//Support Functions
function getResponse(response) {
    //Return new Promise (function(resolve, reject)){resolve({...})}
    return response.json();
}

function validateResponse(todo1Object) {
    if (todo1Object.completed) {
        console.log('Task completed!');
    } else {
        console.log('Task is In-progress!');
    }
}
