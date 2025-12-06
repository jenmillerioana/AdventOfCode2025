console.log("Hello Ioana");

const fs = require('fs');
let arrayRight = [];
let countZeros = 0;
let array = [];
let numbersToCheck = [];
let numberRanges = [];
let sum = 0;
let validNumbers = [];
const uniqueValues = new Set()

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
    // 1. First part 
    // for (const ingredients of data.split('\n')) {
    //    //console.log(ingredients);
    //     if(ingredients.toString().includes('-')){
    //         //console.log(ingredients)
    //         let parts = ingredients.split('-');
    //         let start = parseInt(parts[0]);
    //         let end = parseInt(parts[1]);
    //         numberRanges.push({start: start, end: end});
    //     }else{
    //          numbersToCheck.push(parseInt(ingredients)); 
    //     }

    // }

    // for(const number of numbersToCheck){
    //     let found = false;
    //     for(const range of numberRanges){
    //         if(number >= range.start && number <= range.end){
    //             found = true;
    //         } 
    //     }
    //     if(found){
    //         validNumbers.push(number);
    //         sum++;
    //     }
    // }

    // console.log(`numbers to check are: ${numbersToCheck}`);
    // console.log(`number ranges are: ${JSON.stringify(numberRanges)}`);
    // console.log(`valid numbers are: ${validNumbers}`);
    // console.log(`The sum is: ${sum}`);


    //2. Second part
    ;
    // 1. First part 
    for (const ingredients of data.split('\n')) {
        //console.log(ingredients);
        if (ingredients.toString().includes('-')) {
            //console.log(ingredients)
            let parts = ingredients.split('-');
            let start = parseInt(parts[0]);
            let end = parseInt(parts[1]);
            numberRanges.push({ start: start, end: end });
        } else {
            numbersToCheck.push(parseInt(ingredients));
        }

    }

    // for (const range of numberRanges) {
    //     const totalNUmbersInRange = range.end - range.start + 1;
    //     console.log(`For range ${range.start}-${range.end}, total numbers are: ${totalNUmbersInRange}`);
    //     sum = sum + totalNUmbersInRange;
    // }

    numberRanges.sort((a, b) => a.start - b.start);

    let mergedRanges = [];
    let currentRange = numberRanges[0];
    for (let i = 1; i < numberRanges.length; i++) {
        let nextRange = numberRanges[i];
        if (currentRange.end >= nextRange.start) {
            currentRange.end = Math.max(currentRange.end, nextRange.end);
        }

        else {
            mergedRanges.push(currentRange);
            currentRange = nextRange;
        }
    }
    mergedRanges.push(currentRange);
    console.log(`Merged Ranges are: ${JSON.stringify(mergedRanges)}`);

    let out  = 0;
    for (const range of mergedRanges) {
        out += (range.end - range.start + 1);
    }

    console.log(`Total unique numbers are: ${out}`);

    // console.log(`numbers to check are: ${numbersToCheck}`);
    // console.log(`number ranges are: ${JSON.stringify(numberRanges)}`);
    // console.log(`valid numbers are: ${validNumbers}`);
    // console.log(`The sum is: ${sum}`);

} catch (err) {
    console.error(err);
}



