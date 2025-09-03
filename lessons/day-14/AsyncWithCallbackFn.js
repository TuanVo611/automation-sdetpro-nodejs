const targetUrl = "https://sdetpro.com";

//Event Emitter, asynchronous

//Callback Hell
sendRequest(targetUrl, function (response) {
    // console.log(response)
    processResponse(response, function (statusCode) {
        validateResponse(statusCode);
    })
})

//Asynchronous
function sendRequest(url, callbackFn) {
    console.log(`1. Sending request to url: ${url}`);
    setTimeout(function () {
        console.log("Sending request done!")
        callbackFn({
            status: 301
        })
    }, 3 * 1000);
}

//Asynchronous
function processResponse(response, callback) {
    console.log("2. Processing response ... ")
    setTimeout(function () {
        callback(response.status)
    }, 3 * 1000)
}

//Synchronous
function validateResponse(statusCode) {
    console.log("3. Validating response...");
    if (statusCode === 200) {
        console.log("Passed!");
    } else {
        console.error("Failed!");
    }
}


//1. Callback -> callback hell: nested callback
//2. Promise + thenable chain
//3. async/await
