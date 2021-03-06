//add a button to collaspe instructions or hide instuctions to give page room if I have the chance.

// var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
var ranTargetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log("Goal: " + ranTargetNum);
$("#targetNumber").text(ranTargetNum);

// win, lose, and points variables
var win = 0;
var lose = 0;
var currentScore = 0;
$("#winScore").text("Win: " + win);
$("#loseScore").text("Lose: " + lose);
$("#playerPoints").text(currentScore);
// Make an array from 1-12 to ensure each gem will not have same random number?
/* var ranGemValue = gemValueRange[Math.floor(Math.random() * gemValueRange.length)]; */
// Math.floor(Math.random() * (max - min + 1)) + min; aka Math.floor(Math.random() * (12)) + 1; ?
var gemValue1 = Math.floor(Math.random() * (12)) + 1;
var gemValue2 = Math.floor(Math.random() * (12)) + 1;
var gemValue3 = Math.floor(Math.random() * (12)) + 1;
var gemValue4 = Math.floor(Math.random() * (12)) + 1;

while (
  gemValue1 === gemValue2 ||
  gemValue1 === gemValue3 ||
  gemValue1 === gemValue4 ||
  gemValue2 === gemValue3 ||
  gemValue2 === gemValue4 ||
  gemValue3 === gemValue4) {
    var gemValue2 = Math.floor(Math.random() * (12)) + 1;
    var gemValue3 = Math.floor(Math.random() * (12)) + 1;
    var gemValue4 = Math.floor(Math.random() * (12)) + 1;
  }
console.log("Gem 1 value: " + gemValue1);
console.log("Gem 2 value: " + gemValue2);
console.log("Gem 3 value: " + gemValue3);
console.log("Gem 4 value: " + gemValue4);
console.log("May have patched up the repeating value issue.")
//Gem pictures
$("#blueGem").html("<img class='mysteryGem' src='assets/images/0.jpg' alt='sapphire'>");
$("#redGem").html("<img class='mysteryGem' src='assets/images/1.png' alt='ruby'>");
$("#greenGem").html("<img class='mysteryGem' src='assets/images/2.png' alt='emerald'>");
$("#yellowGem").html("<img class='mysteryGem' src='assets/images/3.jpg' alt='topaz'>")

// RESET FUNCTION
console.log("Appears to be an issue with red, green, and yellow gems not changing values on reset."); //resolved by removing while loop
console.log("Random target number aka Goal shows being changed on reset but still acts as if it never changed either"); 
function reset() {
  //current score return to 0
  currentScore = 0;
  $("#playerPoints").text(currentScore);
  //rerolls target number on reset
  var ranTargetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log("On reset new goal is: " + ranTargetNum);
  $("#targetNumber").text(ranTargetNum);
  //rerolls gem values on reset
  gemValue1 = Math.floor(Math.random() * (12)) + 1;
  gemValue2 = Math.floor(Math.random() * (12)) + 1;
  gemValue3 = Math.floor(Math.random() * (12)) + 1;
  gemValue4 = Math.floor(Math.random() * (12)) + 1;
  // "attempt" on reducing chance of same value on gems
/* while (
    gemValue1 === gemValue2 ||
    gemValue1 === gemValue3 ||
    gemValue1 === gemValue4 ||
    gemValue2 === gemValue3 ||
    gemValue2 === gemValue4 ||
    gemValue3 === gemValue4) {
      var gemValue2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      var gemValue3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      var gemValue4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    } */
  console.log("Gem 1 reset value: " + gemValue1);
  console.log("Gem 2 reset value: " + gemValue2);
  console.log("Gem 3 reset value: " + gemValue3);
  console.log("Gem 4 reset value: " + gemValue4);
} 

//Gem button click aka $("#COLORgem").onclick function....
//red green and yellow gems seem to be buggy...

$("#blueGem").on("click", function() {
  currentScore = currentScore + gemValue1;
  $("#playerPoints").text(currentScore);
  console.log("current score:" + currentScore);
  if (currentScore === ranTargetNum) {
    win++;
    $("#winScore").text("Win: " + win);
    reset();
  }
  if (currentScore > ranTargetNum) {
    lose++;
    $("#loseScore").text("Lose: " + lose);
    reset();
  }

})

$("#redGem").on("click", function() {
  currentScore = currentScore + gemValue2;
  $("#playerPoints").text(currentScore);
  console.log("current score:" + currentScore);
  if (currentScore === ranTargetNum) {
    win++;
    $("#winScore").text("Win: " + win);
    reset();
  }
  if (currentScore > ranTargetNum) {
    lose++;
    $("#loseScore").text("Lose: " + lose);
    reset();
  }
})

$("#greenGem").on("click", function() {
  currentScore = currentScore + gemValue3;
  $("#playerPoints").text(currentScore);
  console.log("current score:" + currentScore);
  if (currentScore === ranTargetNum) {
    win++;
    $("#winScore").text("Win: " + win);
    reset();
  }
  if (currentScore > ranTargetNum) {
    lose++;
    $("#loseScore").text("Lose: " + lose);
    reset();
  }
})

$("#yellowGem").on("click", function() {
  currentScore = currentScore + gemValue4;
  $("#playerPoints").text(currentScore);
  console.log("current score:" + currentScore);
  if (currentScore === ranTargetNum) {
    win++;
    $("#winScore").text("Win: " + win);
    reset();
  }
  if (currentScore > ranTargetNum) {
    lose++;
    $("#loseScore").text("Lose: " + lose);
    reset();
  }
})


/* imagecrystalsrc = "assets/images/" + i + ".jpg;" */ /* give images numbers to go with loop */ //seems to work only if images are all same file types. if one is png and rest is jpg this method breaks apparently

/* 
var gemValueRange = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log(gemValueRange);
for (var i = 0; i < 4; i++) {
  var ranGemValue = gemValueRange[Math.floor(Math.random() * gemValueRange.length)];
  console.log("random gem value:" + ranGemValue); 

  var gemPic = $("<img>");
  gemPic.addClass("mysteryGem");
  gemPic.attr("src", "assets/images/" + i + ".jpg"); //change picture names into numbers and change it to i
  gemPic.attr("src", "assets/images/" + i + ".jpg");
  gemPic.attr("src", "assets/images/" + i + ".jpg");
  gemPic.attr("src", "assets/images/" + i + ".jpg");
  gemPic.attr("data-crystalvalue", gemValueRange[i]);
  $("#gems").append(gemPic);
}

 */

/* var gemValue1 = Math.floor(Math.random() * (12 - 1)) + 1;
var gemValue2 = Math.floor(Math.random() * (12 - 1)) + 1;
var gemValue3 = Math.floor(Math.random() * (12 - 1)) + 1;
var gemValue4 = Math.floor(Math.random() * (12 - 1)) + 1;
console.log(gemValue1);
console.log(gemValue2);
console.log(gemValue3);
console.log(gemValue4); */