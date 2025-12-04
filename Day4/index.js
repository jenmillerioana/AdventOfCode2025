console.log("Hello Ioana");

const fs = require('fs');
let arrayRight = [];
let countZeros = 0;
let array = [];
let arrayOfChristmasPaperline = [];
let arrayOfChristmasPaper = [];

try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
    //# 1. First part 
    // for (const papers of data.split('\n')) {
    //    console.log(papers);
    //    for (const paper of papers) { 
    //         console.log(paper);
    //         arrayOfChristmasPaperline.push(paper.toString());
    //    }
    //      arrayOfChristmasPaper.push(arrayOfChristmasPaperline);
    //     arrayOfChristmasPaperline = [];

    // }

    // let paperSum = 0;

    // for(let i =0; i<arrayOfChristmasPaper.length; i++){
    //     for(let j=0; j<arrayOfChristmasPaper.length; j++){ 

    //         if(arrayOfChristmasPaper[i][j] ==="@"){
    //             let papersSidesCount = 0;

    //             if(arrayOfChristmasPaper[i][j-1] && arrayOfChristmasPaper[i][j-1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j] ==="@" ){ 
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i][j+1] && arrayOfChristmasPaper[i][j+1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j] ==="@" ){ 
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j-1] && arrayOfChristmasPaper[i-1][j-1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j+1] && arrayOfChristmasPaper[i-1][j+1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j-1] && arrayOfChristmasPaper[i+1][j-1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j+1] && arrayOfChristmasPaper[i+1][j+1] ==="@" ){
    //                 papersSidesCount++;
    //             }

    //             if(papersSidesCount < 4){
    //                 paperSum++;
    //             }
    //         }
    //     }
    // }

    // // console.log(paperSum);
    // console.log(`array length: ${array.length}`);
    // console.log(`Paper sum : ${paperSum}`);

    // # 2. Second part
    for (const papers of data.split('\n')) {
       console.log(papers);
       for (const paper of papers) { 
            // console.log(paper);
            arrayOfChristmasPaperline.push(paper.toString());
       }
         arrayOfChristmasPaper.push(arrayOfChristmasPaperline);
        arrayOfChristmasPaperline = [];

    }

    let paperSum = 0;
    let mark = true;
    let result;

    while(mark === true){
        result = checkPapersArray(arrayOfChristmasPaper, paperSum);
        arrayOfChristmasPaper = result.arrayOfChristmasPaper;
        paperSum = result.paperSum;
        mark = result.noMark;
    }
  
    // console.log(paperSum);
    console.log(`array length: ${array.length}`);
    console.log(`Paper sum : ${result.paperSum}`);

    

} catch (err) {
    console.error(err);
}



function checkPapersArray(arrayOfChristmasPaper, paperSum){ 

    let markedPositions = [];
    let noMark = true;

    for(let i =0; i<arrayOfChristmasPaper.length; i++){
        for(let j=0; j<arrayOfChristmasPaper.length; j++){ 

            if(arrayOfChristmasPaper[i][j] ==="@"){
                let papersSidesCount = 0;

                if(arrayOfChristmasPaper[i][j-1] && arrayOfChristmasPaper[i][j-1] ==="@" ){
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j] ==="@" ){ 
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i][j+1] && arrayOfChristmasPaper[i][j+1] ==="@" ){
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j] ==="@" ){ 
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j-1] && arrayOfChristmasPaper[i-1][j-1] ==="@" ){
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i-1] && arrayOfChristmasPaper[i-1][j+1] && arrayOfChristmasPaper[i-1][j+1] ==="@" ){
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j-1] && arrayOfChristmasPaper[i+1][j-1] ==="@" ){
                    papersSidesCount++;
                }

                if(arrayOfChristmasPaper[i+1] && arrayOfChristmasPaper[i+1][j+1] && arrayOfChristmasPaper[i+1][j+1] ==="@" ){
                    papersSidesCount++;
                }

                if(papersSidesCount < 4){
                    paperSum++;
                    markedPositions.push({i: i, j: j});
                }
            }
        }
    }

    console.log(`markedPositions: ${JSON.stringify(markedPositions)}`);

    for(let i = 0; i<markedPositions.length; i++){
        arrayOfChristmasPaper[markedPositions[i].i][markedPositions[i].j] = "x";
        console.log(`Marked position i: ${markedPositions[i].i} j: ${markedPositions[i].j}`);
    }

    console.log(`markedPositions length: ${markedPositions.length}`);

    if(markedPositions.length <= 0){
        noMark = false;
    }

    console.log(`arrayOfChristmasPaper after marking: ${JSON.stringify(arrayOfChristmasPaper)}`);
    

    return { paperSum, arrayOfChristmasPaper, noMark } ;

}
