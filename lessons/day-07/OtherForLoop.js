const myArray = [1, 2, 3, 4, 5]

// FOR ... OF
for(let value of myArray){
    console.log(value);
}

//FOR ... IN
for (const index in myArray) {
    console.log(index);
}

//FOREACH



const automationUserList = [];
myArray.forEach(customLogic)
function customLogic(value, index, array){
    automationUserList.push(`automationUser_${value}@mydomain.com`)
}
console.log(automationUserList)