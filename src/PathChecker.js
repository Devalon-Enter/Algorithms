"use strict";
// import Rand from 'rand-seed';
// const rand = new Rand('afsdfas');
function pathFinder(probability) {
    let numTable = [];
    let colorTable = [];
    const size = 5;
    let countBlack = 0;
    let countWhite = 0;
    let countPath = 1;
    // Definition of numTable and colorTable
    for (let row = 0; row < size; row++) {
        numTable.push(new Array(size));
        colorTable.push(new Array(size));
        for (let col = 0; col < size; col++) {
            numTable[row][col] = Math.round(Math.random() * 100) / 100;
            if (numTable[row][col] <= probability) {
                countBlack++;
                colorTable[row][col] = 1;
            }
            else {
                countWhite++;
                colorTable[row][col] = -1;
            }
        }
    }
    for (let col = 0; col < size; col++) {
        let b1 = (col > 0) && colorTable[0][col - 1];
        console.log(col);
        if (colorTable[0][col] === 1) {
            if (b1 === countPath - 1) {
                colorTable[0][col] = countPath--;
                console.log("first iteration:", countPath);
            }
            colorTable[0][col] = countPath;
            console.log("second iteration:", countPath);
            countPath++;
            console.log("count raised:", countPath, "\n");
        }
    }
    for (let row = 1; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let b0 = (row === 0 && colorTable[0][col]) ? colorTable[0][col] : -1;
            let b1 = (col > 0 && row > 0) ? colorTable[row - 1][col - 1] : -1;
            let b2 = (row > 0) ? colorTable[row - 1][col] : -1;
            let b3 = (col < size - 1 && row > 0) ? colorTable[row - 1][col + 1] : -1;
            let b4 = (col > 0) ? colorTable[row][col - 1] : -1;
            let mypath = Math.max(b0, b1, b2, b3, b4);
            colorTable[row][col] = mypath;
            // let c1 = colorTable[row-1][col-1];
            // let c2 = colorTable[row-1][col];
            // let c3 = colorTable[row-1][col+1];
            // let c4 = colorTable[row][col-1];
            // if (colorTable[row][col] >= 1 && (b0 || b1 || b2 || b3 || b4)) {
            //   let location: Array<number> = []
            //   location.push(c1, c2, c3, c4);
            //   console.log(colorTable[row][col])
            //   colorTable[row][col] = location;
            // }
        }
    }
    console.table(numTable);
    console.table(colorTable);
    console.log("Tiles counted at initialization:", countBlack);
    console.log("Tiles counted at initialization:", countWhite, "\n");
    console.log("% = Black");
    console.log("| = White \n");
    let probabilityCheck = countBlack / (size * size);
    console.log("Probability Check:", probabilityCheck);
}
;
pathFinder(0.7);
