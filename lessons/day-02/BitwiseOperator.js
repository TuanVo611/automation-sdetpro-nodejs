// if(get1stNumber() != 0 || get2ndNumber() != 0){
//     console.log("All nums are NOT zero!");
// }


if(get1stNumber() != 0 && get2ndNumber() != 0){
    console.log("All nums are NOT zero!");
}

function get1stNumber(){
    console.log("Calling 1st function...");
    return 0;
}

function get2ndNumber(){
    console.log("Calling 2nd function...");
    return 2;
}