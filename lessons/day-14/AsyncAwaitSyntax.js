//Data
const todo1Endpoint = "https://jsonplaceholder.typicode.com/todos/1";

//Usage
test(todo1Endpoint);

//Logic - From Controller
async function test(url) {
    // fetch(url)
    //     .then(getResponse)
    //     .then(validateResponse)

    const response = await fetch(url);
    const todo1Object = await response.json();

    if (todo1Object.completed) {
        console.log('Task completed!');
    } else {
        console.log('Task is In-progress!');
    }
}

//Support Functions
function getResponse(response) {
    //Return new Promise (function(resolve, reject)){resolve}
    return response.json();
}

function validateResponse(todo1Object) {
    if (todo1Object.completed) {
        console.log('Task completed!');
    } else {
        console.log('Task is In-progress!');
    }
}
