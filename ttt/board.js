function Board() {
  this.grid = [["", "", ""], ["", "", ""], ["", "", ""]];
}

Array.prototype.transpose = function () {
  var transposed = new Array(this.length);

  for (var i = 0; i < this.length; i++) {
    transposed[i] = [];
    for (var j = 0; j < this[0].length; j++) {
        transposed[i][j] = this[j][i];
    }
  }

  return transposed;
};

Board.threeInARow = function (grid) {
  var threeInARows = false;

  grid.forEach(function (row) {

    var thisRowIsTrue = row.every(function (el) {
      return el === row[0] && el !== "";
    });

    if (thisRowIsTrue) {
      threeInARows = true;
    }
  });

  return threeInARows;
};

Board.prototype.anyThreeInARow = function () {
  return this.anyRows() || this.anyCols() || this.anyDiags();
};

Board.prototype.anyRows = function () {
  return Board.threeInARow(this.grid);
};

Board.prototype.anyCols = function() {
  return Board.threeInARow(this.grid.transpose());
};

Board.prototype.anyDiags = function() {
  var g = this.grid;
  var diags = [ [g[0][0], g[1][1], g[2][2]] , [g[0][2], g[1][1], g[2][0]] ];
  return Board.threeInARow(diags);
};

Board.prototype.draw = function() {
  var draw = true;
  this.grid.forEach(function (row) {
    row.forEach(function (el) {
      el === "" ? (draw = false) :  undefined;
    });
  });
  return draw;
};

Board.prototype.print = function () {
  this.grid.forEach(function (row) {
    console.log(JSON.stringify(row) + "\n");
  });
};

module.exports = Board;
