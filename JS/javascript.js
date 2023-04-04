///////////// I should use comments and nice things here for my own benefit

/// things that can be cleaned up - move error handling to its own function
$(document).ready(function () { //////I am still not quite sure how this works. But wrapping everything in it does work...

///// Global Variables
let naughtScore = 0;
let crossScore = 0;
let currentPlayer = "";
let isPOne = true;
let player1name = sessionStorage.getItem("player1-name");
let player2name = sessionStorage.getItem("player2-name");
let player1col = sessionStorage.getItem("player1-col");
let player2col = sessionStorage.getItem("player2-col");
console.log(player1name)
console.log(player2name)
console.log(player1col)
console.log(player2col)

// let isGameComplete = false;
$('#announcement-message').hide()

//<<<<<<<<<<<<<<<<<<<< on click log ic for game >>>>>>>>>>>>>>>>>>>>\\

$('.game-button').on('click', function(){
$('.game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === false){
        $(this).parent().addClass('animate__animated animate__shakeX');
        $('#announcement-message').show()
        return false
    }
    if (($(this).html() === player1name) || ($(this).html() === player2name) ) {
        $('#announcement-message').html('This square is unavailable').show()
        return false
    }
    $(this).html(player1name).addClass('player1');
    isPOne = false;
    $('#player').addClass('player2') ///// These should really be a seperate function
    $('#player').removeClass('player1')
    $('#player').html("Player 2's")
    $('#announcement-message').hide()
    $(this).parent().removeClass('animate__animated animate__shakeX')
    winChecker();
});

//<<<<<<<<<<<<<<<<<<<< on right-click logic for game >>>>>>>>>>>>>>>>>>>>\\
$('.game-button').on('contextmenu', function(){
    $('.game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === true){
        $(this).parent().addClass('animate__animated animate__shakeX')
        $('#announcement-message').show()
        return false
    }
        if (($(this).html() === player1name) || ($(this).html() === player2name) ) {
        $('#announcement-message').html('This square is unavailable').show()
        return false
    }
    $(this).html(player2name).addClass('player2')
    isPOne = true;
    $('#player').addClass('player1');     ///// These should really be a seperate function
    $('#player').removeClass('player2');
    $('#player').html("Player 1's")
    $('#announcement-message').hide()
    winChecker();
    return false
});

const winChecker = function(){
    //// Checks Horizontal Wins
    if (($('#00').html() == $('#01').html() && $('#01').html() == $('#02').html()) || ($('#10').html() == $('#11').html() && $('#11').html() == $('#12').html()) || ($('#20').html() == $('#21').html() && $('#21').html() == $('#22').html())){
        scoreUpdate();
    }   
    //// Checks Vertical Wins
    if (($('#00').html() == $('#10').html() && $('#10').html() == $('#20').html()) || ($('#01').html() == $('#11').html() && $('#11').html() == $('#21').html()) || ($('#02').html() == $('#12').html() && $('#12').html() == $('#22').html())){
        scoreUpdate();
    }
    //// Checks Diagonal Wins
    if (($('#00').html() == $('#11').html() && $('#11').html() == $('#22').html()) || ($('#02').html() == $('#11').html() && $('#11').html() == $('#20').html())){
        scoreUpdate();
    }
}

const scoreUpdate = function() {
    if (isPOne === false) { /////////// three equals === very important
        naughtScore += 1;
        $('#naughtScore').html(naughtScore);
        currentPlayer = "Player 1";
        $('#announcement-message').html(`${currentPlayer} has won!`).show();
        resetFunction();
    } if (isPOne === true) {
        crossScore += 1;
        $('#crossScore').html(crossScore);
        currentPlayer = "Player 2";
        $('#announcement-message').html(`${currentPlayer} has won!`).show();
        resetFunction();
    }
}

const resetFunction = function(){
    $('#00').html("00");
    $('#01').html("01");
    $('#02').html("02");
    $('#10').html("10");
    $('#11').html("11");
    $('#12').html("12");
    $('#20').html("20");
    $('#21').html("21");
    $('#22').html("22");
    $('.game-button').removeClass('player1');
    $('.game-button').removeClass('player2');
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