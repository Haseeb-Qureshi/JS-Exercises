var Board = require("./board.js");

function Game(reader) {
  this.reader = reader;
  this.board = new Board();
  this.mark = 'x';
}

Game.prototype.isValidMove = function(pos) {
  return this.board.grid[pos[0]][pos[1]] == "";
};

Game.prototype.switchMark = function() {
  this.mark = this.mark === 'x' ? 'o' : 'x';
};

Game.prototype.makeMark = function (pos, callback) {
  if (this.isValidMove(pos)) {
    this.board.grid[pos[0]][pos[1]] = this.mark;
  } else {
    console.log("Not a valid move.\n");
    callback();
  }
};

Game.prototype.promptMove = function(callback) {
  var that = this;
  this.reader.question("Pick a square to mark\n", function(input) {
    input = input.split(' ');

    var pos = input.map(function (el){
      return parseInt(el) - 1;
    });

    that.makeMark(pos, that.promptMove.bind(that, callback));
    callback();
  });
};

Game.prototype.run = function (completionCallback) {
  this.board.print();
  this.promptMove(this.run.bind(this, completionCallback));

  if (this.board.anyThreeInARow()) {
    console.log(this.mark + " won!");
    completionCallback();
  } else if (this.board.draw()) {
    console.log("It was a draw...");
    completionCallback();
  }

  this.switchMark();
};

module.exports = Game;
