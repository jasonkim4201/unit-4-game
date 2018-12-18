//add a button to collaspe instructions or hide instuctions to give page room. that or not use a jumbotron for game title...that thing is a bit huge...

// declare all my variables

// have a random number generator ranging between 19-120 as per instructions. DONE
  //Make ranTargetNum show up on html file. DONE

//This is where I'll add comments about the win/lose score when I have ideas.

// GEMS. Each crystal should have a random hidden value between 1-12

//Once gems are assigned random hidden values, add on click function. if clicked give will give points.

// Total score accumulated from clicking on gems

//On game completeion (win or lose) the game is reset.  


// var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
var ranTargetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(ranTargetNum);
$("#targetNumber").text(ranTargetNum);

// win, lose, and points variables
var win = 0;
var lose = 0;
var currentScore = 0;
$("#winScore").text("Win: " + win);
$("#loseScore").text("Lose: " + lose);
$("#playerPoints").text(currentScore);

var gemValue1 = Math.floor(Math.random() * (12 - 1)) + 1;
// Make an array from 1-12 to ensure each gem will not have same random number?
var gemValueRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(gemValueRange);
/* var ranGemValue = gemValueRange[Math.floor(Math.random() * gemValueRange.length)]; */

for (var i = 0; i < 4; i++) {
  var ranGemValue = gemValueRange[Math.floor(Math.random() * gemValueRange.length)];
  console.log("random gem value:" + ranGemValue); /* THIS METHOD GIVES ME REPEAT VALUES FOR GEMS. Figure it out! */
}






