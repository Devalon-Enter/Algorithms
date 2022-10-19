// import Rand from 'rand-seed';
// const rand = new Rand('afsdfas');
function pathFinder(probability) {
    var numTable = [];
    var colorTable = [];
    var size = 5;
    var countBlack = 0;
    var countWhite = 0;
    var countPath = 1;
    // Definition of numTable and colorTable
    for (var row = 0; row < size; row++) {
        numTable.push(new Array(size));
        colorTable.push(new Array(size));
        for (var col = 0; col < size; col++) {
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
    for (var col = 0; col < size; col++) {
        var b1 = (col > 0) && colorTable[0][col - 1];
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
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            if (colorTable[row][col] == -1)
                continue;
            var b0 = (row === 0 && colorTable[0][col]) ? colorTable[0][col] : -1;
            var b1 = (col > 0 && row > 0) ? colorTable[row - 1][col - 1] : -1;
            var b2 = (row > 0) ? colorTable[row - 1][col] : -1;
            var b3 = (col < size - 1 && row > 0) ? colorTable[row - 1][col + 1] : -1;
            var b4 = (col > 0) ? colorTable[row][col - 1] : -1;
            var mypath = Math.max(b0, b1, b2, b3, b4);
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
    var probabilityCheck = countBlack / (size * size);
    console.log("Probability Check:", probabilityCheck);
}
;
pathFinder(0.5);
//# sourceMappingURL=PathChecker.js.map