function pathFinder(probability: number) {

  let numTable: Array<Array<number>> = [];
  let colorTable: Array<Array<string>> = [];
  let black: Array<number> = [];
  let white: Array<number> = [];
  const size: number = 5;
  let countBlack: number = 0;
  let countWhite: number = 0;

  //Hello there

// Definition of numTable and colorTable
  for (let row: number = 0; row < size; row++) {

     numTable.push(new Array(size))
     colorTable.push(new Array(size))
  
    for (let col:number = 0; col < size; col++) {
      
      numTable[row][col]  = Math.round(Math.random() * 100) / 100;

      if (numTable[row][col] <= probability) {
        countBlack++        
        colorTable[row][col] = "%";
      } else {
        countWhite++
        colorTable[row][col] = "|";
      }
    }
  }

  for (let row: number = 0; row < size; row++) {
    for (let col: number = 0; col < size; col++) {

      // Is only getting used when row is 0
      if (row == 0) {
        if (colorTable[0][col] == "%") {
          black.push(1);
        } else {
          white.push(0);
        }
      }

      // Is only getting used when row is not 0
      if (row !== 0) {

        // Is only getting used when column is 0
        if (col === 0) {
          if ( colorTable[row - 1][col] == "%" ||  colorTable[row - 1][col + 1] == "%") {
            black.push(1)
          } else {
            white.push(0);
          }
        }

        // Is only getting used when column is at the last index of column
        if (col == size - 1) {
          if ( colorTable[row][col - 1] == "%" || colorTable[row - 1][col - 1] == "%" || colorTable[row - 1][col] == "%") {
            black.push(1);
          } else {
            white.push(0);
          }
        }
            
            // Is only getting used when column is not 0
        if (col !== 0 && col !== size - 1) {
          if (colorTable[row][col - 1] == "%" || colorTable[row - 1][col - 1] == "%" || colorTable[row - 1][col] == "%" || colorTable[row - 1][col + 1] == "%") {
            black.push(1);
          } else {
            white.push(0);
          }
        }
      }
    }
  }
  console.table(numTable);
  console.table(colorTable);

  console.log(black.length);
  console.log(white.length);

  console.log("% = Black");
  console.log("| = White \n");
  console.log("CountBlack:",countBlack);
  console.log("CountWhite:",countWhite);

  let probabilityCheck: number = countBlack / (size * size);

  console.log("Probability Check:",probabilityCheck)
};

pathFinder(0.7);