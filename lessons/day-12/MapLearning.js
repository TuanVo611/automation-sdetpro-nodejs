//CREATE
const emergencyList = new Map([
    ['113','Police Dept'],
    ['114','Fire Dept'],
    ['115','Hospital Dept'],
    ['116','Others'],
]);

//READ
console.log(emergencyList.get('113'));
const is117Existing = emergencyList.has('117');
console.log(`Is 117 existing: ${is117Existing}`);

// Loop over all keys and get values
const allKeys = emergencyList.keys();
for (const key of allKeys) {
    console.log(`${key} : ${emergencyList.get(key)}`)
}

for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`)  
}

// UPDATE/ADD
emergencyList.set('116', "Something Else");
console.log(emergencyList);

//DELETE
console.log(`The size before: ${emergencyList.size}`);
console.log(emergencyList);
emergencyList.delete('116');
console.log(`The size after: ${emergencyList.size}`)
console.log(emergencyList);


