
const UNUSED_SQUARE = " ";
const COMPUTER_MARKER = "O";
const HUMAN_MARKER = "X";




function createSquare(marker) {
  return {
    marker : marker || " ",
    setMarker(marker) {this.marker = marker},
    getMarker() {return this.marker},
    isUnused() {return this.marker === " "},
    toString() {return this.marker}
  }
}

function createPlayer(marker) {
  return {
    marker : marker,
    getMarker() {
      return this.marker;
    }
  }
}

function createHuman() {
  return Object.create(createPlayer(HUMAN_MARKER));
}

function createComputer() {
  return Object.create(createPlayer(COMPUTER_MARKER));
}


class Player {
  constructor(marker){
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }
}


class Human extends Player{
  constructor(){
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor(){
    super(Square.COMPUTER_MARKER);
  }
}