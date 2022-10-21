// import Rand from 'rand-seed';
// const rand = new Rand('afsdfas');
function pathFinder(probability) {
    // Init the visual tables
    var numTable = [];
    var colorTable = [];
    // Defines size of the table
    var size = 10;
    // Different counts for black and white
    // as well for paths existing in first row
    var countBlack = 0;
    var countWhite = 0;
    var countPath = 1;
    // Definition for the numTable and colorTable 2D arrays
    for (var row = 0; row < size; row++) {
        // Creates a new array with length of size => size ~10?
        numTable.push(new Array(size));
        colorTable.push(new Array(size));
        for (var col = 0; col < size; col++) {
            // Assigns for numTable random number between 0 and 1
            numTable[row][col] = Math.round(Math.random() * 100) / 100;
            // If the assigned number in the tile exceeds the probability
            // it will be marked as white otherwise black
            if (numTable[row][col] <= probability) {
                countBlack++;
                colorTable[row][col] = 0;
            }
            else {
                countWhite++;
                colorTable[row][col] = -1;
            }
        }
    }
    // Iterates through the first row of 2D array
    // To check for potential paths
    for (var col = 0; col < size; col++) {
        // Describes the movement pattern in first row
        var b1 = (col > 0) && colorTable[0][col - 1];
        // In case of finding a tile with a number of 1
        // assing it a new path number if not connected to already existing path
        if (colorTable[0][col] === 0) {
            if (b1 === countPath - 1) {
                colorTable[0][col] = countPath--;
            }
            colorTable[0][col] = countPath;
            countPath++;
        }
    }
    // Describes movement in 2D Array and checking for paths
    for (var row = 1; row < size; row++) {
        for (var col = 0; col < size; col++) {
            if (colorTable[row][col] == -1)
                continue;
            // To check if tile is occupied by specific Path
            // These variables hold diffrent moving patterns in the 2D array
            var b1 = (col > 0 && row > 0) ? colorTable[row - 1][col - 1] : -1;
            var b2 = (row > 0) ? colorTable[row - 1][col] : -1;
            var b3 = (col < size - 1 && row > 0) ? colorTable[row - 1][col + 1] : -1;
            var b4 = (col > 0) ? colorTable[row][col - 1] : -1;
            // Checks for the highest number found in the movement
            var mypath = Math.max(b1, b2, b3, b4);
            // Assigns that highest number to current tile
            colorTable[row][col] = mypath;
            if (colorTable[size - 1][col] >= 1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    console.table(numTable);
    console.table(colorTable);
    console.log("Tiles counted at initialization:", countBlack);
    console.log("Tiles counted at initialization:", countWhite, "\n");
    console.log("1 or higher = Black");
    console.log("-1 = White \n");
    var probabilityCheck = countBlack / (size * size);
    console.log("Probability Check:", probabilityCheck);
}
;
// function for different samples => creates different probabilitys
function linspace(start, stop, num, endpoint) {
    if (endpoint === void 0) { endpoint = true; }
    var div = endpoint ? (num - 1) : num;
    var step = (stop - start) / div;
    return Array.from({ length: num }, function (_, i) { return start + step * i; });
}
var probs = linspace(0, 1, 11);
var num_repetitions = 10;
var ys = [];
for (var _i = 0, probs_1 = probs; _i < probs_1.length; _i++) {
    var p = probs_1[_i];
    var path_found_count = 0;
    for (var i = 0; i < num_repetitions; i++) {
        if (pathFinder(p)) {
            console.log(p);
            path_found_count++;
            console.log("Path found:", path_found_count);
        }
    }
    var y = path_found_count / num_repetitions;
    ys.push(y);
    console.log(p.toString() + "," + y.toString());
    console.log(path_found_count);
}
//# sourceMappingURL=PathChecker.js.map