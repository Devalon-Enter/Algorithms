// import Rand from 'rand-seed';
// const rand = new Rand('afsdfas');

function pathFinder(probability: number) {

  // Init the visual tables
  let numTable: Array<Array<number>> = [];
  let colorTable: Array<Array<number>> = [];

  // Defines size of the table
  const size: number = 100;

  // Different counts for black and white
  // as well for paths existing in first row
  let countBlack: number = 0;
  let countWhite: number = 0;
  let countPath: number = 1;

// Definition for the numTable and colorTable 2D arrays
  for (let row: number = 0; row < size; row++) {

    // Creates a new array with length of size => size ~10?
     numTable.push(new Array(size))
     colorTable.push(new Array(size))
  
    for (let col:number = 0; col < size; col++) {
      
      // Assigns for numTable random number between 0 and 1
      numTable[row][col]  = Math.round(Math.random() * 100) / 100;

      // If the assigned number in the tile exceeds the probability
      // it will be marked as white otherwise black
      if (numTable[row][col] <= probability) {
        countBlack++        
        colorTable[row][col] = 0;
      } else {
        countWhite++
        colorTable[row][col] = -1;
      }
    }
  }


  // Iterates through the first row of 2D array
  // To check for potential paths
  for (let col: number = 0; col < size; col++) {
    
    // Describes the movement pattern in first row
    let b1 = (col > 0) && colorTable[0][col - 1];
  
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
  for (let row: number = 1; row < size; row++) {
    for (let col: number = 0; col < size; col++) {

      if (colorTable[row][col] == -1) continue;

      // To check if tile is occupied by specific Path
      // These variables hold diffrent moving patterns in the 2D array
      let b1 = (col > 0 && row > 0) ? colorTable[row-1][col-1] : -1;
      let b2 = (row > 0) ? colorTable[row-1][col] : -1;
      let b3 = (col < size - 1 && row > 0) ? colorTable[row-1][col+1] : -1;
      let b4 = (col > 0) ? colorTable[row][col-1] : -1;

      // Checks for the highest number found in the movement
      let mypath = Math.max(b1, b2, b3, b4)
      
      // Assigns that highest number to current tile
      colorTable[row][col] = mypath;
    }
  }

  // Checks the very last row for paths; higher than 0 => path true
  for (let row: number = 0; row < size; row++) {
    for (let col: number = 0; col < size; col++) {
      if (colorTable[size-1][col] >= 1) {
        return true
      } else {
        return false
      }
    }
  }
};

// function for different samples => creates different probabilitys
function linspace(start: number, stop: number, num: number, endpoint = true) {
  const div = endpoint ? (num - 1) : num;
  const step = (stop - start) / div;
  return Array.from({length: num}, (_, i) => start + step * i);
}

// sample range definition; Range 0 to 1 and 11 samples
const probs: Array<number> = linspace(0, 1, 11)

// The amount of repetitions of the simulation
const num_repetitions = 100;
const ys: Array<number> = []

// Runs the simulation and counts the paths found
for (const p of probs) {

  let path_found_count = 0;

  for (let i: number = 0; i < num_repetitions; i++) {
    if (pathFinder(p)) {
      path_found_count++
    }
  }

  const y = path_found_count / num_repetitions;
  ys.push(y)
  console.log(p.toString() + "," + y.toString())
}
