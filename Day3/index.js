console.log("Hello Ioana");

const fs = require('fs');
let arrayRight = [];
let countZeros = 0;
let array = [];

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
    //# 1. First part 
    // for (const numberlist of data.split(/\r?\n/)) {
    //     let lineArray = numberlist.split(" ");
    //     console.log(lineArray);
    //     for (const stringNumber of lineArray) {
    //         let str = stringNumber.split("");
    //         let largestNumber = 0;
    //         for (let i = 0; i < str.length; i++) {
    //             for (let j = i + 1; j < str.length; j++) {
    //                 let currentNumber = parseInt(str[i] + str[j]);
    //                 if (currentNumber > largestNumber) {
    //                     largestNumber = currentNumber;
    //                 }
    //             }
    //         }
    //         array.push(largestNumber);
    //     }

    // }

    // sum = 0;
    // for (const num of array) {
    //     sum = sum + num;
    // }
    // console.log(`array length: ${array.length}`);
    // console.log(`Sum of largest numbers: ${sum}`);


    // Helper: return the largest numeric subsequence of length k

    //# 2. Second part
    for (const numberlist of data.split(/\r?\n/)) {
        let lineArray = numberlist.split(" ");
        console.log(lineArray);
        for (const stringNumber of lineArray) {
            let largestNumberStr = largestKSubsequence(stringNumber, 12);
            console.log(`Largest subsequence of length 12 for ${stringNumber} is ${largestNumberStr}`);
            array.push(largestNumberStr);
        }

    }

    sum = 0;
    for (const num of array) {
        console.log(`num is ${num}`);
        sum = sum + parseInt(num);
    }
    console.log(`array length: ${array.length}`);
    console.log(`Sum of largest numbers: ${sum}`);


} catch (err) {
    console.error(err);
}

function largestKSubsequence(s, k) {
    const str = String(s).replace(/\s+/g, '');
    const n = str.length;
    if (k >= n) return str;
    let remove = n - k;
    const stack = [];

    for (let i = 0; i < n; i++) {
        const c = str[i];
        while (remove > 0 && stack.length > 0 && stack[stack.length - 1] < c) {
            stack.pop();
            remove--;
        }
        stack.push(c);
    }

    // If still need to remove characters, trim from the end
    const result = stack.slice(0, k).join('');
    return result;
}