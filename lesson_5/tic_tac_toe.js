/*
Description:
Tic Tac Toe is a 2-player board game.
The board is a 3x3 grid.
Players take turns marking a square with a marker that identifies the player.
Traditionally, the player to go first uses the marker X to mark her squares, and the player to go second uses the marker O.
The first player to mark 3 squares in a row with her marker wins the game.
A row can be a horizontal row, a vertical column, or either of the two diagonals (top-left to bottom-right and top-right to bottom-left).
There is one human player and one computer player.
The human player always moves (places a marker) first in the initial version of our game; you can change that later.

Nouns and Verbs:
nouns:
    Players
    board (3x3 grid)
    Xs
    Os
    positions/square
    row
verbs:
    place/marking a square


Relationships:
Game (n)
Board (n)
Row (n)
Square (n)
Marker (n)
Player (n)
    Mark (v)
    Play (v)
    Human (n)
    Computer (n)
*/

// const readline = require('readline-sync');

// function prompt(string) {
//     console.log(`=> ${string}`)
// }

class Square {
  constructor(marker = " ") {
    this.marker = marker;
  }
}


class Board {
    constructor(){
      this.squares = {
        "1": new Square(" "),
        "2": new Square(" "),
        "3": new Square(" "),
        "4": new Square(" "),
        "5": new Square(" "),
        "6": new Square(" "),
        "7": new Square(" "),
        "8": new Square(" "),
        "9": new Square(" "),
      };
    }

    display() {
        console.log("");
        console.log("     |     |");
        console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
        console.log("     |     |");
        console.log("-----+-----+-----");
        console.log("     |     |");
        console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
        console.log("     |     |");
        console.log("-----+-----+-----");
        console.log("     |     |");
        console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
        console.log("     |     |");
        console.log("");
      }
  
}
class Row {
    constructor(){

    }
}

class Marker {
    constructor(){}
}
class Player {
    constructor(){
    }
    mark() {}
    play() {}
}


class Human extends Player{
    constructor(){}
}

class Computer extends Player {
    constructor(){}
}

class TTTGame {
    // omitted code
    constructor() {
        this.board = new Board();
    }
  
    play() {
      //SPIKE
      this.displayWelcomeMessage();
  
      while (true) {
        this.board.display();
  
        this.firstPlayerMoves();
        if (this.gameOver()) break;
  
        this.secondPlayerMoves();
        if (this.gameOver()) break;
        break;
      }
  
      this.displayResults();
      this.displayGoodbyeMessage();

    }
  
    displayWelcomeMessage() {
      console.log("Welcome to Tic Tac Toe!");
    }
  
    displayGoodbyeMessage() {
      console.log("Thanks for playing Tic Tac Toe! Goodbye!");
    }
  
    displayResults() {
      //STUB
      // show the results of this game (win, lose, tie)
    }
  
    
    firstPlayerMoves() {
      //STUB
      // the first player makes a move
    }
  
    secondPlayerMoves() {
      //STUB
      // the second player makes a move
    }
  
    gameOver() {
      //STUB
      return false;
    }
  }

let tttGame = new TTTGame();
tttGame.play();