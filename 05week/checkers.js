'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  // Your code here
  constructor(color) {  
    if (color === "white") {
      this.symbol = '○';
    } else if (color === "black") {
      this.symbol = '●';
    }
  }
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = [];
  }
  
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  createCheckers() {
    var whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
                         [1, 0], [1, 2], [1, 4], [1, 6],
                         [2, 1], [2, 3], [2, 5], [2, 7]];
    var blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
                         [6, 1], [6, 3], [6, 5], [6, 7],
                         [7, 0], [7, 2], [7, 4], [7, 6]];
    for (let i = 0; i <= 11; i++) {
      const row = whitePositions[i][0];
      const column = whitePositions[i][1];
      this.grid[row][column] = new Checker('white');
      this.checkers.push([whitePositions[i][0], whitePositions[i][1]]);
      const rowBlack = blackPositions[i][0];
      const colBlack = blackPositions[i][1];
      this.grid[rowBlack][colBlack] = new Checker('black');
      this.checkers.push([blackPositions[i][0], blackPositions[i][1]]);
    }
    console.log(this.checkers);
  }

  selectChecker(row, column) {
    return this.grid[row][column];
  }
  
  killChecker(startPos, endPos) {
    var middle = [];
    if (startPos[1] > endPos[1] && startPos[0] > endPos[0]) {
      middle = [startPos[0] -1, startPos[1] -1];
      this.grid[middle[0]][middle[1]] = null;
      var middleIndex = this.checkers.findIndex(
        item => item[0] === middle[0] && item[1] === middle[1]);
      this.checkers.splice(middleIndex, 1);
    }
    if (startPos[1] > endPos[1] && startPos[0] < endPos[0]) {
      middle = [startPos[0] +1, startPos[1] -1];
      this.grid[middle[0]][middle[1]] = null;
      var middleIndex = this.checkers.findIndex(
        item => item[0] === middle[0] && item[1] === middle[1]);
      this.checkers.splice(middleIndex, 1);
    }
    if (startPos[1] < endPos[1] && startPos[0] > endPos[0]) {
      middle = [startPos[0] -1, startPos[1] +1];
      this.grid[middle[0]][middle[1]] = null;
      var middleIndex = this.checkers.findIndex(
        item => item[0] === middle[0] && item[1] === middle[1]);
      this.checkers.splice(middleIndex, 1);
    }
    if (startPos[1] < endPos[1] && startPos[0] < endPos[0]) {
      middle = [startPos[0] +1, startPos[1] +1];
      this.grid[middle[0]][middle[1]] = null;
      var middleIndex = this.checkers.findIndex(
        item => item[0] === middle[0] && item[1] === middle[1]);
      this.checkers.splice(middleIndex, 1);
    }
  }

} 

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  moveChecker(start, end) {
    var startCoords = start.split("").map(Number);
    var endCoords = end.split("").map(Number);
    var checker = this.board.selectChecker(startCoords[0], startCoords[1]);
    var checkerIndex = this.board.checkers.findIndex(item => {
      return item[0] === startCoords[0] && item[1] === startCoords[1];
    });
    console.log(checkerIndex);
    // function checkerIndex(checkerCoords) {
    //   if (checkerCoords === startCoords) {
    //     return startCoords;
    //   }
    // }

    this.board.grid[endCoords[0]][endCoords[1]] = checker;
    this.board.grid[startCoords[0]][startCoords[1]] = null;
    // console.log(checkerIndex(startCoords));
    // console.log(startCoords);
    // console.log(this.board.checkers);
    console.log(this.board.checkers.findIndex(item => {
      console.log(item, startCoords)
      return item[0] === startCoords[0] && item[1] === startCoords[1];
    }));
    this.board.checkers.splice(checkerIndex, 1, [endCoords[0], endCoords[1]]);
    console.log(this.board.checkers);
    if (Math.abs(startCoords[0] - endCoords[0]) === 2) {
      this.board.killChecker(startCoords, endCoords);
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
