// Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.

var countHeads = 0;
var countTails = 0;
var winner2;

function coinFlip(){
  var randomNumber = Math.random() * 100;
  if (winner2){
    alert("GAME IS OVER! Please refresh to play again")
  }
  if (randomNumber < 50){
    this.coinSide = "HEADS";
    countHeads++;
    document.getElementById("result").innerHTML = "HEADS";
    document.getElementById("score").innerHTML = "HEADS: " + countHeads + " || TAILS: " + countTails;
    winner();
    return coinSide;
  } else {
    this.coinSide = "TAILS"
    countTails++;
    document.getElementById("result").innerHTML = "TAILS";
    document.getElementById("score").innerHTML = "HEADS: " + countHeads + " || TAILS: " + countTails;
    winner();
    return coinSide;
  }
}

function winner(){
  console.log("function calling");
    if (countHeads === 5){
      console.log("working?");
      winner2 = "HEADS";
      document.getElementById("winner").innerHTML = "WINNER IS " + winner2;
      return winner;
    } else if (countTails === 5) {
      console.log("working?");
      winner2 = "TAILS";
      document.getElementById("winner").innerHTML = "WINNER IS " + winner2;
      return winner;
    }
  // }
}
