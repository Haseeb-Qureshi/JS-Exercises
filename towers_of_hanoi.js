var readLine = require('readline');
var reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

Array.prototype.last = function () {
  return this[this.length - 1];
};

function HanoiGame(num) {
  this.stacks = [[], [], []];
  for (var i = 1; i <= num; i++) {
    this.stacks[0].unshift(i);
  }
}

HanoiGame.prototype.isWon = function() {
  return this.stacks[2].length === 3;
};

HanoiGame.prototype.isValidMove = function(start, end) {
  return this.stacks[start].last() < this.stacks[end].last() ||
    (this.stacks[end].length === 0 && this.stacks[start].length > 0);
};

HanoiGame.prototype.move = function(start, end) {
  if (this.isValidMove(start, end)) {
    this.stacks[end].push(this.stacks[start].pop());
  } else {
    console.log("Not valid.");
  }
  this.print();
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback) {
  var that = this;
  reader.question("Pick a start stack and end stack\n", function(input) {
    input = input.split(' ');

    var positions = input.map(function (el){
      return parseInt(el) - 1;
    });
    that.move(positions[0], positions[1]);
    callback();
  });
};

HanoiGame.prototype.run = function(completionCallback) {
  this.promptMove(this.run.bind(this, completionCallback));
  if (this.isWon()) {
    console.log("You won!");
    completionCallback();
  }
};

var game = new HanoiGame(7);
game.run(function () {
  console.log("Yes, you did!");
  reader.close();
});
