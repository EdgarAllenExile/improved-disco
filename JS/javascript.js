///////////// I should use comments and nice things here for my own benefit

/// things that can be cleaned up - move error handling to its own function

$(document).ready(function () { //////I am still not quite sure how this works. But wrapping everything in it does work...

///// Global Variables
let naughtScore = 0;
let crossScore = 0;
let currentPlayer = "O"; //this is currently redundant
let isPOne = true;

$('#error-message').hide()

/////////////// on click logic for game /////////////////

$('.game-button').on('click', function(){
$('.game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === false){
        $(this).parent().addClass('animate__animated animate__shakeX');
        $('#error-message').show()
        return false
    }
    if (($(this).html() === 'X') || ($(this).html() === 'O') ) {
        $('#error-message').html('This square is unavailable').show()
        return false
    }
    $(this).html("O").addClass('player1');
    isPOne = false;
    $('#player').addClass('player2') ///// These should really be a seperate function
    $('#player').removeClass('player1')
    $('#player').html("Player 2's")
    $('#error-message').hide()
    $(this).parent().removeClass('animate__animated animate__shakeX')
    console.log(isPOne)
    winChecker();

});
$('.game-button').on('contextmenu', function(){
    $('game-box').removeClass('animate__animated animate__shakeX');
    if (isPOne === true){
        $(this).parent().addClass('animate__animated animate__shakeX')
        $('#error-message').show()
        return false
    }
    if (($(this).html() === 'X') || ($(this).html() === 'O') ) {
        $('#error-message').html('This square is unavailable').show()
        return false
    }
    $(this).html('X').addClass('player2')
    isPOne = true;
    $('#player').addClass('player1');     ///// These should really be a seperate function
    $('#player').removeClass('player2');
    $('#player').html("Player 1's")
    $('#error-message').hide()
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

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });




});