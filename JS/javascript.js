///////////// I should use comments and nice things here for my own benefit
///// Global Variables
let naughtScore = 0;
let crossScore = 0;


/////////////// on click logic for game /////////////////
$(document).ready(function () {
    $('.game-button').on('click', function(){
        $(this).html('X')
        winChecker();
    });
    $('.game-button').on('contextmenu', function(){
        $(this).html('O')
        winChecker();
        return false
    });
});

const winChecker = function(){
    //// Checks Horizontal Wins
    if (($('#00').html() == $('#01').html() && $('#01').html() == $('#02').html()) || ($('#10').html() == $('#11').html() && $('#11').html() == $('#12').html()) || ($('#20').html() == $('#21').html() && $('#21').html() == $('#22').html())){
        alert("You Win Horizontally!")
    }   
    //// Checks Vertical Wins
    if (($('#00').html() == $('#10').html() && $('#10').html() == $('#20').html()) || ($('#01').html() == $('#11').html() && $('#11').html() == $('#21').html()) || ($('#02').html() == $('#21').html() && $('#21').html() == $('#22').html())){
        alert("You Win Vertically!")
    }
    //// Checks Diagonal Wins
    if (($('#00').html() == $('#11').html() && $('#11').html() == $('#22').html()) || ($('#02').html() == $('#11').html() && $('#11').html() == $('#20').html())){
        alert("You Win Diagonally!")
    }
}

// const scoreUpdate = function{

// }
