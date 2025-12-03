console.log("Hello Ioana");

const fs = require('fs');
let arrayRight = [];
let countZeros = 0;
let array = [];

try {
    // const data = fs.readFileSync('input.txt', 'utf8');
    // console.log(data);
    // //# 1. First part 
    // for (const numberlist of data.split(/\r?\n/)) {
    //     let lineArray = numberlist.split(",");
    //     for (const numberRange of lineArray) {
    //         let numbersplite = numberRange.split("-");

    //         let start = parseInt(numbersplite[0]);
    //         let end = parseInt(numbersplite[1]);
    //         console.log(`Start: ${start} End: ${end}`);

    //         for (let i = start; i <= end; i++) {
    //             const numStr = String(i);
    //             //  remove digits with patterns like 385385 

    //             const regex = /^(\d+)\1$/;           

    //             const repetitions = regex.test(numStr);
    //             // push only when there is repeating immediate segment
    //             //console.log(`Number: ${i} Repetitions: ${repetitions}`);
    //             if (repetitions) {
    //                 array.push(i);
    //             }
    //         }

    //     }

    // }
    // sum = 0;
    // for (const num of array) {
    //     sum = sum + num;
    // }
    // console.log(`Numbers with repetitions: ${array.length}`);
    // console.log(`Sum of numbers with repetitions: ${sum}`);


    //# 2. Second part
    for (const numberlist of data.split(/\r?\n/)) {
        let lineArray = numberlist.split(",");
        for (const numberRange of lineArray) {
            let numbersplite = numberRange.split("-");

            let start = parseInt(numbersplite[0]);
            let end = parseInt(numbersplite[1]);
            console.log(`Start: ${start} End: ${end}`);

            for (let i = start; i <= end; i++) {
                const numStr = String(i);
                //  remove digits with patterns like 385385 

                const regex = /^(\d+)\1+$/;

                const repetitions = regex.test(numStr);
                // push only when there is repeating immediate segment
                //console.log(`Number: ${i} Repetitions: ${repetitions}`);
                if (repetitions) {
                    array.push(i);
                }
            }

        }

    }
    sum = 0;
    for (const num of array) {
        sum = sum + num;
    }
    console.log(`Numbers with repetitions: ${array.length}`);
    console.log(`Sum of numbers with repetitions: ${sum}`);

} catch (err) {
    console.error(err);
}