function calculatePi() {
  //Declaration for points x and y in Square 
  let totalSamples: number = 1000000;
  let samplesInCircle: number = 0;

  //setting the points in the square: number 1'000'000
  for (let i: number = 0; i < totalSamples; i++) {
    let x = Math.random();
    let y = Math.random();

    //calculation of points being located in the circle with pythagoras
    let distance = x * x + y * y;
    if (distance < 1) samplesInCircle++;
  }

  /*The number of points in the circle divided by amount of
  placed points in square*/
  let result: number = 4 * samplesInCircle / totalSamples;

  //logging points in x and y
  //logging sum of points that are in the circle

  //Trying to log PI
  console.log("PI:", result);
  console.log(Math.abs(Math.PI - result));


  let pi_estimate = 0;
  for (let n = 1; n < 1000; n++) {
       pi_estimate += (1/n) * (1/n);
  }
  console.log("pi estimate", Math.sqrt(6*pi_estimate));
};

calculatePi();