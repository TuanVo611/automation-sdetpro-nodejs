// let name = "Tuan";
// let age = 29;
// let gender = "Male";

// Office Stuff -> Box(Office Stuff): Pen, Notebook, Earaser

//Create an object - literal
let userInfo = {
    name : "Tuan",
    age : 29,
    "gender" : "Male",
    // sayHello : function(){
    //     console.log("Hello");
    // },
    // anotherNestedObject: {
    //     anotherInfo : ""
    // }
}

//Read | Dot Natation to get value from a property
// console.log(`User Name: ${userInfo.name}`);
console.log(`User Gender: ${userInfo["gender"]}`);

//Destructure

const { age , name, ["gender"] : gender} = userInfo;
console.log(`User Name: ${name}`);
console.log(`User Gender: ${gender}`);

//Update
userInfo.age = 30;
console.log(userInfo);

//Delete
delete userInfo["gender"]
console.log(userInfo);

userInfo.gender = "Male"
console.log(userInfo);


