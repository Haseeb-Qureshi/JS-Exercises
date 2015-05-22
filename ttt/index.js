var readLine = require('readline');
var reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Board = require("./board.js");
var Game = require('./game.js');

var game = new Game(reader);

game.run(function () {
  console.log("Whatever");
  reader.close();
});
