//Full disclosure, the basis of this code comes from: https://www.youtube.com/watch?v=P2TcQ3h0ipQ
// In my defence, he doesn't use jQuery, and I have tried to as much as I can!
let player1name = sessionStorage.getItem("player1-name");
let player2name = sessionStorage.getItem("player2-name");
let player1col = sessionStorage.getItem("player1-col");
let player2col = sessionStorage.getItem("player2-col");

$('.player2').css("color", player2col)
$('.player1').css("color", player1col)

let origBoard;
let huPlayer = player1name;
let aiPlayer = player2name;
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const $cells = $('.cell');                                              // jQuery

const startGame = function(){                                           
    $('.endgame').css('display', 'none');                               // hides the endgame box
    origBoard = Array.from(Array(9).keys());                            // fills the original board array 
    console.log(origBoard);                                             // Testing
    console.log($cells)                                                 // Testing
    $cells.html('').css('background-color', 'white');                   // clears the winner's colour thing
    $cells.on('click', turnClick);                                      // Turns the game back on
}

const turnClick = function(square){                                       // Doesn't run unless space empty
    if (typeof origBoard[square.target.id] == 'number'){                 // This works because board starts with IDs matching square numbers and are filled with X/O
    turn(square.target.id, huPlayer);
    if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
    }
}

const turn = function(squareID, player){
    origBoard[squareID] = player;                                       //
    document.getElementById(squareID).innerHTML = player;               // This should be jQuery, but doesn't currently work!
    let gameWon = checkWin(origBoard, player);                          //
    if(gameWon){
        gameOver(gameWon)
    }
}

const checkWin = function(board, player){                               
	let plays = board.reduce((a, e, i) =>                               // Accumulator, element, iterator also what is this arrow thing
		(e === player) ? a.concat(i) : a, []);                          // Creates Arrays(?) that show where the different symbols have been entered
	let gameWon = null;                                                 // create GameWon variable
    for (let [index, win] of winCombos.entries()) {                     // checks through the winCombos to ensure that the player has played in the correct square index
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

const gameOver = function(gameWon){
    for (let index of winCombos[gameWon.index]) {                       // Checks through the index of the winning array combination 
		document.getElementById(index).style.backgroundColor =          // Then sets the background colour 
			gameWon.player == huPlayer ? "blue" : "red";                // to the player's color
	}
	$cells.off('click');                                                // Stops the onClick Logic working
    declareWinner(gameWon.player == huPlayer ? "You Win!" : "You Lose!");  // Shows you win / lose
}

const declareWinner = function(who){
    $('.endgame').css('display', 'block');
    $('.endgame .text').html(who);
}

const emptySquares = function(){
    return origBoard.filter(s => typeof s == 'number');                 // finds first empty spot
}

const bestSpot = function() {
    return minimax(origBoard, aiPlayer).index;
}

const checkTie = function(){
    if (emptySquares().length == 0) {
        $cells.css('background-color', 'green');
        $cells.off('click');
        declareWinner("Tie Game");
        return true;
    }
  return false;
}

const minimax = function(newBoard, player) {
	let availSpots = emptySquares();

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}

	let moves = [];
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			let result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			let result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	let bestMove;
	if(player === aiPlayer) {
		let bestScore = -10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

// <<<<<<<<<<<<<<<<<<<<<<< onClick logic >>>>>>>>>>>>>>>>>>>>>>>>>>>
$cells.on('click', turnClick);
startGame();

// You are up to about here: https://youtu.be/P2TcQ3h0ipQ?t=2155