//Data
const givenStr = "Sweetens Cove - Trackmam, to have both the 14 day trial flag and the Trackman Course Play flag";

//Using:
let groupWordMap = groupWordsUsingMap(givenStr);
console.log(groupWordMap);

//Controller

function groupWordsUsingMap(givenString) {

    let individualWords = givenString.replace(/,/gi, "").split(" ");
    let wordMaps = new Map();
    
    for (const word of individualWords) {
        if (wordMaps.has(word)) {
            wordMaps.set(word, wordMaps.get(word) + 1);
        } else {
            wordMaps.set(word, 1);
        }
    }
    return wordMaps;
}