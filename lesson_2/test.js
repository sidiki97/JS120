
function Player(){
}
Player.prototype.move = null;

function Human() {
  this.play = function() {
    this.move = true;
  }
}

Human.prototype = Object.create(Player.prototype);

let human = new Human();
human.play();
console.log(human.move);