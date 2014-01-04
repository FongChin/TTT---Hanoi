(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  // var readline = require('readline');
  // var READER = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });

  var Game = Hanoi.Game = function () {
    this.towers = [[3, 2, 1], [], []];
		this.towersUI = new Hanoi.TowersUI();
  };

	Game.toFromTower = [];
  Game.prototype.turn = function () {

  }

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.run = function () {
    var game = this;
		game.clickEvents();
  };

  Game.prototype.takeTurn = function (start,end){
    var game = this;

    if (game.move(start,end)) {
      console.log(game.towers);
			game.towersUI.render(start, end);
    } else {
      console.log("Invalid move!")
    }

    if (game.isWon()) {
      alert("You win!");
    } else {
      // game.run();
    }
  }

	Game.prototype.clickEvents = function(){
		var game = this;
		$(".pile").on("click", function(event){
			Game.toFromTower.push(event.currentTarget.id);
			if (Game.toFromTower.length === 2){
				game.takeTurn(Game.toFromTower[0], Game.toFromTower[1]);
				Game.toFromTower = [];
			}else{
				$(this).toggleClass("highlight");
			}
		})
	};
})(this);

// this.Hanoi.Game is a constructor function, so we instantiate a new object, then run it.

