function calculatePi() {
    //Declaration for points x and y in Square 
    var totalSamples = 1000000;
    var samplesInCircle = 0;
    //setting the points in the square: number 1'000'000
    for (var i = 0; i < totalSamples; i++) {
        var x = Math.random();
        var y = Math.random();
        //calculation of points being located in the circle with pythagoras
        var distance = x * x + y * y;
        if (distance < 1)
            samplesInCircle++;
    }
    /*The number of points in the circle divided by amount of
    placed points in square*/
    var result = 4 * samplesInCircle / totalSamples;
    //logging points in x and y
    //logging sum of points that are in the circle
    //Trying to log PI
    console.log("PI:", result);
    console.log(Math.abs(Math.PI - result));
    var pi_estimate = 0;
    for (var n = 1; n < 1000; n++) {
        pi_estimate += (1 / n) * (1 / n);
    }
    console.log("pi estimate", Math.sqrt(6 * pi_estimate));
}
;
calculatePi();
//# sourceMappingURL=CalculatePi.js.map