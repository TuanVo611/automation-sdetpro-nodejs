let fooArray = [1, 12, 16, 28, 34];
let barAraay = [1, 13, 16, 27, 99];
let mergedArray = [];
let fooPosition = 0;
let fooLength = fooArray.length - 1;
let barPosition = 0;
let barLength = barAraay.length - 1;

for (; fooPosition < fooLength && barPosition < barLength;) {
    const fooValue = fooArray[fooPosition];
    const barValue = barAraay[barPosition];
    if (fooValue <= barValue) {
        mergedArray.push(fooValue);
        fooPosition++;
    } else {
        mergedArray.push(barValue);
        barPosition++;
    }
}

for (; fooPosition < fooLength; fooPosition++) {
    mergedArray.push(fooArray[fooPosition])
}

for (; barPosition < barLength; barPosition++) {
    mergedArray.push(barAraay[barPosition])
}


