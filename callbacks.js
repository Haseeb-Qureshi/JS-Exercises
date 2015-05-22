// function Clock () {
// }
//
// Clock.TICK = 5000;
//
// Clock.prototype.printTime = function () {
//   time = this.currentTime;
//   console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
// };
//
// Clock.prototype.run = function () {
//   this.currentTime = new Date();
//   this.printTime();
//   setTimeout(this._tick.bind(this), this.TICK);
// };
//
// Clock.prototype._tick = function () {
//   time = this.currentTime.valueOf();
//   this.currentTime = new Date(time + 5000);
//   this.printTime();
//   setTimeout(this._tick.bind(this), this.TICK);
//
// };
//
// var clock = new Clock();
// clock.run();
//
//


// AddToNumbers

var readLine = require('readline');
var reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    var number = reader.question("Enter a number\n", function (str) {
      var num = parseInt(str);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if (numsLeft === 0) {
    completionCallback(sum);
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
