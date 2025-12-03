console.log("Hello Ioana");

const fs = require('fs');
let arrayRight = [];
let countZeros = 0;

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    // #1 First Part 
    //   console.log(data);
    // const range = 100; // Range is 0 to 99 (100 total numbers)
    // let newValue = 0;
    // let currentValue = 50;
    // for (const nr of data.split(/\r?\n/)) {
    //     let lineArray = nr.split(" ");
    //     console.log(lineArray);
    //     for (const line of lineArray) {
    //         let fistChar = line[0];
    //         let number = parseInt(line.slice(1));

    //         console.log(fistChar);
    //         console.log(number);

    //          // Range is 0 to 99 (100 total numbers)
    //          if(fistChar === 'L'){
    //             number = -number;
    //          }

    //         let c = currentValue + number;
    //         currentValue = ((c % range) + range) % range;
    //          console.log(currentValue);
    //         // currentValue = (currentValue + number) % range;
    //         // console.log(currentValue);
    //         // Handle negative numbers when subtracting: 
    //         // The modulo operator in JS can return a negative number for a negative input.
    //         // This ensures the result wraps correctly from -1 to 99.
    //         // if (currentValue < 0) {
    //         //     currentValue += range;
    //         // }
    //         if(currentValue === 0){
    //             countZeros++;
    //         }
            
    //     }
    // }


    // # 2 Second part (reworked)
    // Use the same token parsing as the first part (L/R + number),
    // but step one unit at a time so we count every time we pass through 0.
    const range = 100; // Range is 0 to 99 (wrap-around)
    let currentValue = 50; // keep same starting value used earlier

    for (const nr of data.split(/\r?\n/)) {
        // tokens are space-separated on each line
        const lineArray = nr.split(" ").filter(Boolean);
        for (const token of lineArray) {
            // Expect tokens like 'L68' or 'R14'
            const dirChar = token[0];
            const n = parseInt(token.slice(1), 10);
            if (Number.isNaN(n)) continue;

            // Interpret L as negative movement, R as positive
            let delta = n;
            if (dirChar === 'L') delta = -n;
            else if (dirChar === 'R') delta = n;
            else {
                // If token doesn't start with L/R treat numeric part as +n
                // (keeps behavior similar to earlier attempts)
                delta = n;
            }

            const steps = Math.abs(delta);
            const stepDir = delta > 0 ? 1 : -1;

            for (let s = 1; s <= steps; s++) {
                // advance one unit and wrap into 0..range-1
                currentValue = ((currentValue + stepDir) % range + range) % range;
                if (currentValue === 0) {
                    countZeros++;
                }
            }
        }
    }

    console.log(`The number of zeros is: ${countZeros}`);
} catch (err) {
    console.error(err);
}