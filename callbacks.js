// clock

function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  var time = this.currentTime;
  console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
};

Clock.prototype.run = function () {
  this.currentTime = new Date();
  this.printTime();
  setTimeout(this._tick.bind(this), this.TICK);
};

Clock.prototype._tick = function () {
  var time = this.currentTime.valueOf();
  this.currentTime = new Date(time + 5000);
  this.printTime();
  setTimeout(this._tick.bind(this), this.TICK);

};

var clock = new Clock();
clock.run();




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

// absurdBubbleSort

var readLine = require('readline');
var reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + "?\n", function (ans) {
    ans === "yes" ? callback(true) : callback(false);
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
