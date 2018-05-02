var scenarioText = [];
var scenarioTextLost = [];
var userOptions = [];
var randomEncounterText = [];
var stage = 0;


function getSceneText(LevelID, SceneID)
{

 this.getLevel1 = function()
    {
        switch(SceneID)
        {
            case 0:
                return "As the sun rises on the island, the penguins discover that they're far away from home.They notice" +
                "that all of their penguin friends are gone. They are alone.lick a selection above to decide what the penguins should do.";

            // scenario text
            case 1:
            return "As the sun rises on the island, the pinguins discover that they are far away from home; they notice that all of their pinguin friends are gone- They are alone.";

            // polar bear
            case 2:
            return "Encounter a polar bear when trying to figure out where they are.";

            // go hunting
            case 3:
            return "The pinguins decide to go hunting and find food for the polar bear.";

            // keep food
            case 4:
            return "The pinguins keep the food.";

            //never see polar bear again
            case 6:
            return "The pinguins never see the polar bear again and make it to the next island on their own. What should they do next?"

            //find food success
            case 7:
            return  "The pinguins successfully found food, but that was a lot of work.";

            //random polar Bear
            case 8:
            return "The pinguins randomly encounter a polar bear and ask for a ride. They get dropped off by the polar bear on a new iceberg.";
        }
        return "GetScene Level 1 Error";
    }
    this.getLevel2 = function()
    {
        switch(SceneID)
        {
            //polar bear drop off
            case 1:
            return "The pinguins were dropped off by the polar bear on a random iceberg.";

            //tired and new island
            case 2:
            return "The pinguins were too tired to travel, and got washed up on another random iceberg.";

            //new island
            case 3:
            return "The pinguins are now on a new island. What do they do now?";

            // rest v travel
            case 4:
            return "While the pinguins rested before they travelled. They can't decide if they should rest more on the new iceberg, or if they should just start travelling.";

            // rest
            case 5:
            return "The pinguns decide they're going to rest on the iceberg.";

            // travel
            case 6:
                return "It's time to travel! But how?";

            //swim to where
            case 7:
                return "When in doubt, swim it out! But to where?";
            //eals
            case 8:
                return "The pinguins swam until another iceberg, but encountered hungry seals."

            //whatever they can find
            case 9:
                return "The pinguins decide to make the boat with whatever they can find.";
        }
    }
    this.getLevel3 = function()
    {
        switch(SceneID)
        {
            //new island
            case 1:
            return  "They made it to the final island and can see their home. What should they do?";
            case 2:
            return "The pinguins made it home covered in trash. YOU WIN!";
        }
    }

	switch(LevelID)
	{
        case 1:
            return getLevel1;
        case 2:
            return getLevel2;
        case 3:
            return getLevel3;
    }

}

function getOptionText(LevelID, OptionID)
{
    this.getLevel1 = function()
    {
        switch(OptionID)
        {
            case 0: return "Make their way home";
            case 1: return "Make a new life";
            case 2: return "Go hunting and find food for the polar bear";
            case 3: return "Abandon the polar bear";
            case 4: return "Give the food to the Polar Bear.";
            case 5: return "Keep the food for yourselves.";
            case 6: return "Rest on the iceberg.";
            case 7: return "Start the journey home.";
            case 8: return "Why bother trying to go back home? That's a hassle and penguins are lazy. The penguins should try to make a new life on the island!";
            case 9: return "Leave their friends, their family, and their waddle behind? Absolutely not. We only have faithful penguins here. The penguins should try to make their way home!";
        }
    }
    this.getLevel2 = function()
    {
        switch(OptionID)
        {
            case 1: return "Sleep until the next day";
            case 2: return "Eat fish and then travel.";
            case 3: return "Try to make a sail boat.";
            case 4: return "Swim.";
            case 5: return "Give up on making a sail boat.";
            case 6: return "Build the boat with whatever can be found.";
            case 7: return "Swim until the next iceberg comes along.";
            case 8: return "Swim until the pinguins can't swim anymore.";
            case 9: return  "Stay in the boat.";
            case 10: return "Run from seals.";
            case 11: return "Give seals all of the food in order to escape.";
            case 12: return "Start swimming to avoid the sharks.";
            case 13: return "Start travelling right away";
            case 14: return "Rest until the next day.";
            case 15: return "Travel to get away from the bear.";
            case 16: return "Rest on the island (but far away from the bear)";
            case 17: return "They are rested enough. Make the pinguins travel.";
            case 18: return "Rest more.";
            case 19: return "Travel anyway.";
            case 20: return "Poor pinguins. They need more rest!";
        }
    }
    this.getLevel3 = function()
    {
        switch(OptionID)
        {
            case 1: return "Call for help";
            case 2: return "Take the risk and swim";
        }
    }
    switch(LevelID)
	{
        case 1:
            return this.getLevel1;
        case 2:
            return this.getLevel2;
        case 3:
            return this.getLevel3;
    }
}
function getStage(stageID)
{
    switch(stageID)
	{

        case 0: return {
            sceneText : getSceneText(1, 1) ,
            optionLeft : getOptionText(1, 1) ,
            optionRight : getOptionText(1, 0),
            optionLeftNext : 2,
            optionRightNext : 1
        };

        case 1: return {
            sceneText : getSceneText(1, 2) ,
            optionLeft : getOptionText(1, 3) ,
            optionRight : getOptionText(1, 2),
            optionLeftNext : 3,
            optionRightNext : 4
        };

        case 2:
                playerDeath();
                return {
                    sceneText : scenarioTextLost[0]
                };

        case 3: return {
            sceneText : getSceneText(2, 5) ,
            optionLeft : getOptionText(2, 2) ,
            optionRight : getOptionText(2, 1),
            optionLeftNext : 5,
            optionRightNext : 5
        };
        case 4: return {
            sceneText : getSceneText(1, 6) ,
            optionLeft : getOptionText(1, 7) ,
            optionRight : getOptionText(1, 6),
            optionLeftNext : 3,
            optionRightNext : 6
        };
        case 5:
          levelTwoBackgroundSwap();
        return {

            sceneText : getSceneText(2, 6) ,
            optionLeft : getOptionText(2, 3) ,
            optionRight : getOptionText(2, 4),
            optionLeftNext : 7,
            optionRightNext : 8
        };
        case 6:
          levelTwoBackgroundSwap()
        return {

            sceneText : getSceneText(2, 2) ,
            optionLeft : getOptionText(2, 20) ,
            optionRight : getOptionText(2, 19),
            optionLeftNext : 5,
            optionRightNext : 3
        };
        case 7: return {
          sceneText : getSceneText(2, 7) ,
          optionLeft : getOptionText(2, 7) ,
          optionRight : getOptionText(2, 8),
          optionLeftNext : 9,
          optionRightNext : 10
        };
        case 8: return {
            sceneText : getSceneText(2, 10) ,
            optionLeft : getOptionText(2, 5) ,
            optionRight : getOptionText(2, 6),
            optionLeftNext : 12,
            optionRightNext : 7
        };

        case 9:
        {
        playerDeath();
        return { isdead : true,
            sceneText : scenarioTextLost[1]}
        }

        case 10: return{
          sceneText : getSceneText(2, 8) ,
          optionLeft : getOptionText(2, 10) ,
          optionRight : getOptionText(2, 11),
          optionLeftNext : 14,
          optionRightNext : 13
        }
        case 11:
        {
        playerDeath();
        return { isdead : true,
            sceneText : scenarioTextLost[2]}
        }
        case 12:
            return {
              sceneText : randomEncounterText[2],
              optionLeft : getOptionText(2, 9) ,
              optionRight : getOptionText(2, 12),
              optionLeftNext : 14,
              optionRightNext : 13
          }
        case 13:
              {
              playerDeath();
              return { isdead : true,
                  sceneText : scenarioTextLost[3]}
              }
        case 14:
        levelThreeBackgroundSwap()
        return{
          sceneText : getSceneText(3, 1),
          optionLeft : getOptionText(3, 1) ,
          optionRight : getOptionText(3, 2),
          optionLeftNext : 16,
          optionRightNext : 15
        }
        case 15:
        {
          playerDeath();
          return { isdead : true,
          sceneText : scenarioTextLost[4]}
        }
      case 16:

        gameWin();
        return {
          sceneText : getSceneText(3, 2)
        }

      }

    }

function characterSceneCleanup(){
    $("#gameArea").fadeIn(); // game area fades in
    $("#startGame").remove(); // removes the filter
    $("#gameArea").append('<audio autoplay="true" src="sources/sounds/Sled.mp3" type="audio/mpeg"></audio>');
}

    // all text that includes pinguins brutal demise
    scenarioTextLost[0] = "The pinguins eventually get tired and can no longer find any way to survive. You lose.";
    scenarioTextLost[1] = "The pinguins are tired and encounter sharks. They don't have enough energy to get home. You lose.";
    scenarioTextLost[2] = "The pinguins were not fast enough, and could not escape the seals. You lose.";
    scenarioTextLost[3] = "The pinguins avoid the sharks, but a whale swallows the boat (and the pinguins.) You Lose.";
    scenarioTextLost[4] = "They call for help to the pinguins on their home island, hoping someguin will hear, but noguin did. They never made it home. You lose.";
    scenarioTextLost[5] = "TThe pinguins put forth their best effort, but were killed by all the trash. You lose.";

    // all random encounter dialog here
    randomEncounterText[0] = "The pinguins encounter a polar bear and ask for ride.";
    randomEncounterText[1] = "The boat breaks and there are sharks in the distance. The pinguins have to swim away!";
    randomEncounterText[2] = "The boat survives! However there are sharks in te distance and the pinguins have to make a decision.";


// ========================================================================= Jquery starts here
$(document).ready(function () {
   // if (localStorage.getItem("stage") == null) {
        localStorage.setItem("stage", 0);
  //  }
    loadEvents();

});
function loadEvents()
{
    $("#startGame").click(function () {
      $("#auntArctic").click(function () {
        $("#gameArea").fadeIn(); // game area fades in
        $("#startGame").remove(); // removes the filter
        $("#event").text("Welcome to Pinguins: A Choose Your Own Adventure Game.");
        $("#gameArea").append('<audio autoplay="true" src="sources/sounds/Sled.mp3" type="audio/mpeg"></audio>');
          $("#currentPlayer").css("background-image", "url('images/Entities/aunt.png')");
      });
      $("#wendyWaddle").click(function () {
          characterSceneCleanup();
          $("#event").text("Welcome to Pinguins: A Choose Your Own Adventure Game.");
          $("#currentPlayer").css("background-image", "url('images/Entities/wendy.png')");
      });
      $("#edwardSnow").click(function () {
          characterSceneCleanup();
          $("#event").text("Welcome to Pinguins: A Choose Your Own Adventure Game.");
          $("#currentPlayer").css("background-image", "url('images/Entities/edward.png')");
      });
      $("#frankFishy").click(function () {
          characterSceneCleanup();
          $("#event").text("Welcome to Pinguins: A Choose Your Own Adventure Game.");
          $("#currentPlayer").css("background-image", "url('images/Entities/frank.png')");
      });

    });
    $("#leftChoice").click(function ()
    {
        var currentStage = localStorage.getItem("stage");
        var c = currentStage * 1;
        var newRight = (getStage(c)).optionLeftNext;
        localStorage.setItem("stage", newRight);
        var stage = getStage(newRight);
        if(stage != null){
            changeText(stage.optionLeft,stage.optionRight,stage.sceneText);
            var right = stage.optionRightNext;
            var left = stage.optionLeftNext;
            $("#stage").text("NextLeftScene: " + left + " || " + "Stage: " + newRight +  " || " + "NextRightScene: " + right);
        }

    });
    $("#rightChoice").click(function () {
        var currentStage = localStorage.getItem("stage");
        var c = currentStage * 1;
        var newRight = (getStage(c)).optionRightNext;
        localStorage.setItem("stage", newRight);
        var stage = getStage(newRight);
        changeText(stage.optionLeft,stage.optionRight,stage.sceneText);
        var right = stage.optionRightNext;
        var left = stage.optionLeftNext;
        $("#stage").text("NextLeftScene: " + left + " || " + "Stage: " + newRight +  " || " + "NextRightScene: " + right);
    });

} // end of Events
// ================================ END OF THAT MESS ================================
// random number generator.

function levelTwoBackgroundSwap(){
    $("#gameArea").css("background-image", "url('images/BackDrops/backdrop3.png')");
}
function levelThreeBackgroundSwap(){
    $("#gameArea").css("background-image", "url('images/BackDrops/backdrop1.jpg')");
}
function playerDeath()
{
    $("#leftChoice, #currentPlayer, #rightChoice").remove();
    $("#gameArea").css("background-image", "url('images/BackDrops/lost.png')");
}
function sideBoxesFadeOut()
{
    $("#leftChoice, #rightChoice").remove();
}
function gameWin(){
  $("#stage").remove();
  $("#currentPlayer").remove();
  $("#rightChoice").remove();
  $("#leftChoice").remove();
  $("#event").remove();
  $("#footer").remove();
  $("#gameArea").css("background-image", "url('images/BackDrops/won.png')");
}
// changes text to this specific value in array
function changeText(left, right, story)
{
    // does not include scenarios where player loses
    $("#leftText").text(left);
    $("#rightText").text(right);
    $("#story").text(story);
}
