///////////// I should use comments and nice things here for my own benefit
///// Global Variables
$(document).ready(function () {
///////////////////////////// try making the player thing work with a boolean!!

let naughtScore = 0;
let crossScore = 0;
let currentPlayer = "O";
let isPOne = true;


/////////////// on click logic for game /////////////////

$('.game-button').on('click', function(){
    if (isPOne === false){
        alert('this is not your turn')
        return false
    }
    $(this).html("O").addClass('player1');
    isPOne = false;
    $('#player').addClass('player2') ///// These should really be a seperate function
    $('#player').removeClass('player1')
    $('#player').html("Player 2's")
    console.log(isPOne)
    winChecker();

});
$('.game-button').on('contextmenu', function(){
    if (isPOne === true){
        alert('this is not your turn')
        return false
    }
    $(this).html('X').addClass('player2')
    isPOne = true;
    $('#player').addClass('player1');     ///// These should really be a seperate function
    $('#player').removeClass('player2');
    $('#player').html("Player 1's")
    console.log(isPOne)
    winChecker();
    return false
});


const winChecker = function(){
    //// Checks Horizontal Wins
    if (($('#00').html() == $('#01').html() && $('#01').html() == $('#02').html()) || ($('#10').html() == $('#11').html() && $('#11').html() == $('#12').html()) || ($('#20').html() == $('#21').html() && $('#21').html() == $('#22').html())){
        scoreUpdate();
        alert("You Win Horizontally!");
    }   
    //// Checks Vertical Wins
    if (($('#00').html() == $('#10').html() && $('#10').html() == $('#20').html()) || ($('#01').html() == $('#11').html() && $('#11').html() == $('#21').html()) || ($('#02').html() == $('#12').html() && $('#12').html() == $('#22').html())){
        scoreUpdate();
        alert("You Win Vertically!");
    }
    //// Checks Diagonal Wins
    if (($('#00').html() == $('#11').html() && $('#11').html() == $('#22').html()) || ($('#02').html() == $('#11').html() && $('#11').html() == $('#20').html())){
        scoreUpdate();
        alert("You Win Diagonally!");
    }
}

const scoreUpdate = function() {
    if (isPOne === false) { /////////// three equals === very important
        naughtScore += 1;
        $('#naughtScore').html(naughtScore);
    } if (isPOne === true)  {
        crossScore += 1;
        $('#crossScore').html(crossScore);
    }
}

// <<<<<<<<<<<<<<<<<<<<<<<<<this breaks the boolean for some reason>>>>>>>>>>>>>>>>>>>>>>>>>
// const playerSwap = function(){
//     if (isPOne = true){
//         $('#player').addClass('player1')
//     } else{
//         $('#player').addClass('player2')
//     }
// }

});