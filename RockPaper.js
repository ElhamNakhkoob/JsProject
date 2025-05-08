//in this way typically slice the first two elements of the array (path/to/node , path/to/this/file)
const args = process.argv.slice(2);

let moves = ["rock", "paper", "scissors"];
function computerMove() {
  return moves[Math.floor(Math.random() * moves.length)];
}

// get the player and computer moves
const playerMove = args[0];
const computer = computerMove();

console.log("My move is: " + playerMove);
console.log("Computer move is: " + computer);

/*
if (playerMove === computer) {
  console.log("the same move, try again");
} else if (
  (playerMove === "rock" && computer === "scissors") ||
  (playerMove === "paper" && computer === "rock") ||
  (playerMove === "scissors" && computer === "paper")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
  */

if (computer === "rock" && playerMove === "scissors") {
  console.log("computer wins");
} else if (computer === "rock" && playerMove === "paper") {
  console.log("player wins");
} else if (computer === "rock" && playerMove === "rock") {
  console.log("same move, try again");
} else if (computer === "paper" && playerMove === "rock") {
  console.log("computer wins");
} else if (computer === "paper" && playerMove === "paper") {
  console.log("same move, try again");
} else if (computer === "paper" && playerMove === "scissors") {
  console.log("player wins");
} else if (computer === "scissors" && playerMove === "rock") {
  console.log("player wins");
} else if (computer === "scissors" && playerMove === "paper") {
  console.log("computer wins");
} else if (computer === "scissors" && playerMove === "scissors") {
  console.log("draw");
} else {
  console.log("invalid move");
}
