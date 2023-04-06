# Naughts and Crosses

## Basic Functionality
The current version of my Naughts and Crosses game has the following functionality:
- Basic two player matches.
- Player symbol and colour customisation options.
- Score tracking beyond round end.
- Winner announcements and automatic board resets.
- Right and left mouse button functionality.

## What's Missing?
Provided more time, I would like to implement the following:
- Customisation options for board and background colours.
- Support for increased board size.
- Online multiplayer.
- Single player with computer opponent.

## General Improvements
Beyond functionality additions, there are also improvements I would like to make to my current code:
- Dry. There are some large, repeated portions of the code. I would like to split these things out into functions, to make the code more readable.
- Game logic. Currently, the game works on a "first thing that worked" basis. That is, win checking is done by checking hardcoded square IDs for matches in sorounding squares. 
 - Moving to a system that checks for patterns in object arrays would allow for the implementation of both increased board sizes and multiplayer.

## Functionality left out intentionally
I have opted to not include some potentially recommended features to my game:
- Ability to upload pictures to use as player symbols. 
 - This has been left out because I feel that uploading pictures to use in web-browsers is generally annoying and I do not enjoy it personally.
- Local Storage.
