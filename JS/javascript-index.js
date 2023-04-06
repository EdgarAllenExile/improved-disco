///////////// I should use comments and nice things here for my own benefit

// // <<<<<<<<<<<<<<<<<<<< Menu Functionality >>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).ready(function () { //////I am still not quite sure how this works. But wrapping everything in it does work...
    let p1col = $('#player1-col').val()
    let p2col = $('#player2-col').val()


$('#multi-player-button').on('click', function() {
    let p1name = $('#player1-name').val()
    let p2name = $('#player2-name').val()
    // let p1col = $('#player1-col').val()
    // let p2col = $('#player2-col').val()
    sessionStorage.setItem("player1-name", p1name);
    sessionStorage.setItem("player2-name", p2name);
    sessionStorage.setItem("player1-col", p1col);
    sessionStorage.setItem("player2-col", p2col);

// $('.player2').css("color", p2col)
// $('.player1').css("color", p1col)
});

$('#confirm-color').on('click', function() {
    p1col = $('#player1-col').val()
    p2col = $('#player2-col').val()

    $('.player2').css("color", p2col)
    $('.player1').css("color", p1col)

    console.log(p1col)
    console.log(p2col)
});

});