// String is immutable
let myString = "Hello, day la dau nhay kep: \" ";
console.log(myString);

//length
const strLength = myString.length;
console.log(strLength);

//Get a chacrater at a position
console.log(myString.charAt(15));

//Get all character
for (let index = 0; index < myString.length; index++) {
    // console.log(myString.charAt(index));
}

//Get rid of spaces at beginning and end of string:
console.log(myString.trim());

//Replace
let endCodeStr = "tmoi nmay hemn mnhaumM lumc 7hm";
let deCodeStr = endCodeStr.replaceAll("m","");
console.log(deCodeStr);

//Regex - Regular Expression
// Remove first "m" with regex
console.log(endCodeStr.replace(/m/ , ""));

//Remove all "m" with regex 
console.log(endCodeStr.replace(/m/g, ""));
console.log(endCodeStr.replace(/m/gi, ""));

/**
 Preparation: 30mins
 Cooking: 120mins
 Total: 150mins
 */

 let totalCookingTimeFromUI = "Total: 150mins";
 let totalCookingTime = Number(totalCookingTimeFromUI.replace(/[^0-9]/gmi,""));
 console.log(totalCookingTime + 1);

 //Concatenation
let str1 = "Hello";
let str2 = ", my name is A";

console.log(str1.concat(str2));

//Sub-string:
let strToBeCut = "https://sdetpro.com";

// Inclusive
let startIndex = 0;
// Exclusive
let endIndex = 5;
let subStr = strToBeCut.substring(startIndex,endIndex);
console.log(subStr);

//Split
console.log(strToBeCut.split(":"));