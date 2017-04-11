///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var JohnHeight = 180;
var JohnAge = 92;
var JohnScore = JohnHeight + JohnAge * 5;

var SamHeight  = 182;
var SamAge = 32;
var SamScore = SamHeight + SamAge * 5;

var DanHeight  = 183;
var DanAge = 32;
var DanScore = DanHeight + DanAge * 5;

if (JohnScore > SamScore && JohnScore > DanScore ) {
    console.log('John is the winner with the score of '+JohnScore)
} else if (SamScore > JohnScore && SamScore > DanScore) {
    console.log('Sam is the winner with the score of '+SamScore)
} else if (DanScore > JohnScore && DanScore > SamScore) {
    console.log('Dan is the winner with the score of '+DanScore)
} else {
    console.log('Draw');
}
