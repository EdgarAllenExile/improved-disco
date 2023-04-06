///////////// I should use comments and nice things here for my own benefit
let player1col = sessionStorage.getItem("player1-col");
let player2col = sessionStorage.getItem("player2-col");
$('.player2').css("color", player2col)
$('.player1').css("color", player1col)
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

$('.player2').css("color", player2col)
$('.player1').css("color", player1col)
console.log(player1col)
console.log(player2col)

$('#announcement-message').hide()

//<<<<<<<<<<<<<<<<<<<< on click log ic for game >>>>>>>>>>>>>>>>>>>>\\

$('.game-button').on('click', function(){
$('.game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === false){
        $(this).parent().addClass('animate__animated animate__shakeX');
        $('#announcement-message').html('It is not your go!').show()
        return false
    }
    if (($(this).html() === player1name) || ($(this).html() === player2name) ) {
        $('#announcement-message').html('This square is unavailable').show()
        return false
    }
    $(this).html(player1name).css("color", player1col);
    isPOne = false;
    $('#player').html("Player 2's").css("color", player2col)
    $('#announcement-message').hide()
    $(this).parent().removeClass('animate__animated animate__shakeX')
    winChecker();
});

//<<<<<<<<<<<<<<<<<<<< on right-click logic for game >>>>>>>>>>>>>>>>>>>>\\
$('.game-button').on('contextmenu', function(){
    $('.game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === true){
        $(this).parent().addClass('animate__animated animate__shakeX')
        $('#announcement-message').html('It is not your go!').show()
        return false
    }
        if (($(this).html() === player1name) || ($(this).html() === player2name) ) {
        $('#announcement-message').html('This square is unavailable').show()
        return false
    }
    $(this).html(player2name).css("color", player2col);
    isPOne = true;
    $('#player').html("Player 1's").css("color", player1col)
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
    $('#00').html("00").css("color", "#fafad2");
    $('#01').html("01").css("color", "#fafad2");
    $('#02').html("02").css("color", "#fafad2");
    $('#10').html("10").css("color", "#fafad2");
    $('#11').html("11").css("color", "#fafad2");
    $('#12').html("12").css("color", "#fafad2");
    $('#20').html("20").css("color", "#fafad2");
    $('#21').html("21").css("color", "#fafad2");
    $('#22').html("22").css("color", "#fafad2");
    $('.game-button').removeClass('player1');
    $('.game-button').removeClass('player2');
}

$('#reset-button').on('click', function(){
    resetFunction();
});

});