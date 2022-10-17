// import Rand from 'rand-seed';
// const rand = new Rand('afsdfas');

function pathFinder(probability: number) {

  let numTable: Array<Array<number>> = [];
  let colorTable: Array<Array<string>> = [];
  let black: number = 0;
  let white: number = 0;
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

      let b0 = (row === 0) && colorTable[0][col];
      let b1 = (col > 0 && row > 0) && colorTable[row-1][col-1];
      let b2 = (row > 0) && colorTable[row-1][col];
      let b3 = (col < size - 1 && row > 0) && colorTable[row-1][col+1];
      let b4 = (col > 0) && colorTable[row][col-1];

      if (colorTable[row][col] === "%" && (b0 || b1 || b2 || b3 || b4))
      {
        black++;
      } else {
        white++;
      }
      
    }
  }
  console.table(numTable);
  console.table(colorTable);

  console.log("Tiles counted by algorithm:", black);
  console.log("Tiles counted by algorithm:", white, "\n");

  console.log("Tiles counted at initialization:",countBlack);
  console.log("Tiles counted at initialization:",countWhite, "\n");

  console.log("% = Black");
  console.log("| = White \n");

  let probabilityCheck: number = countBlack / (size * size);

  console.log("Probability Check:",probabilityCheck)
};

pathFinder(0.7);