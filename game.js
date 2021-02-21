
var buttonColours=["red", "blue", "green", "yellow"];

userClickedPattern=[];

var gamePattern=[];


var started = false;


var level=0;


$(document).keydown(function(){
   if (!started) {
   $("h1").text("Level " + level);
   nextSequence();
  started = true;
    }
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  makeSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      makeSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("h1").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}



 function nextSequence(){

   userClickedPattern = [];
   level++;

   $("#level-title").text("Level " + level);

   var randomNumber= Math.floor(Math.random()*4);
   var randomChosenColour= buttonColours[randomNumber];

   gamePattern.push(randomChosenColour);

   makeSound(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(25).fadeIn(25);

 }


 function makeSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 }


function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){$("#" + currentColour).removeClass("pressed");
}, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
