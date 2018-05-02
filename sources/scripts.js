var scenarioText = [];
var scenarioTextLost = [];
var userOptions = [];
var randomEncounterText = [];
var fullGameArea = "";

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

//returns text based on level and scene
function getSceneText(LevelID, SceneID)
{
//private Level functions hold SceneText
this.getLevel1 = function()
{
    switch(SceneID)
    {
        case 0:
            return "As the sun rises on the island, the penguins discover that they're far away from home.They notice" +
            "that all of their penguin friends are gone. They are alone. Click a selection above to decide what the penguins should do.";

        // scenario text
        case 1:
        return "As the sun rises on the island, the pinguins discover that they are far away from home; they notice that all of their pinguin friends are gone- They are alone. Click a selection above to decide what the penguins should do.";

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
        //win
        case 2:
        return "The pinguins made it home covered in trash. YOU WIN!";
    }
}

//level selector
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

//returns an Options text based on the level and OptionID
function getOptionText(LevelID, OptionID)
{
//private level functions hold option text
this.getLevel1 = function()
{
    switch(OptionID)
    {
        case 0: return "Make their way home";
        case 1: return "Make a new life";
        case 2: return "Go hunting and find food for the polar bear";
        case 3: return "Abandon the polar bear";
        case 4: return "Give the food to the Polar Bear.";
        case 5: return "Keep the food for themselves.";
        case 6: return "Rest on the iceberg.";
        case 7: return "Start the journey home.";
        case 8: return "Make a new life on the island!";
        case 9: return "Make their way home!";
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
//switch selector
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


//gets Stage Object based on the ID passed in
// -----------------------------------------------Stage Object-----------------------------------------------
// sceneText - Text to be displayed in the stage footer
// optionLeft - Text to be displayed in the left option
// optionRight - Text to be displayed in the right option
// optionLeftNext - Used to help the event manager know which stage is next if the right option is selected
// optionRightNext - Used to help the event manager know which stage is next if the right option is selected
function getStage(stageID) {
    switch(stageID) {
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

//Sets Basic basic startup events that happen after any character that is selected
function characterSceneCleanup() {
    $("#gameArea").fadeIn(); // game area fades in
    $("#startGame").remove(); // removes the filter
    $("#gameArea").append('<audio autoplay="true" src="sources/sounds/Sled.mp3" type="audio/mpeg"></audio>');
    $("#event").text("Welcome to Pinguins: A Choose Your Own Adventure Game. Click here at any time to start over.");
}

//Used by Character Selector and the loadSaveHandler to set the game character
function setCharacterBackground(characterID){
    switch(characterID){
        case 1:
        $("#currentPlayer").css("background-image", "url('images/Entities/aunt.png')");
        break;
        case 2:
        $("#currentPlayer").css("background-image", "url('images/Entities/wendy.png')");
        break;
        case 3:
        $("#currentPlayer").css("background-image", "url('images/Entities/edward.png')");
        break;
        case 4:
        $("#currentPlayer").css("background-image", "url('images/Entities/frank.png')");
        break;
    }
}
//Load Events Handler
function loadEvents()
{
    //Double Click
$("#startGame").click(function () {
  $("#auntArctic").click(function () {
    localStorage.setItem("pinguin", 1);
      characterSceneCleanup();
    setCharacterBackground(1);
  });
  $("#wendyWaddle").click(function () {
    localStorage.setItem("pinguin", 2);
      characterSceneCleanup();
      setCharacterBackground(2);
  });
  $("#edwardSnow").click(function () {
    localStorage.setItem("pinguin", 3);
      characterSceneCleanup();
      setCharacterBackground(3);
  });
  $("#frankFishy").click(function () {
    localStorage.setItem("pinguin", 4);
      characterSceneCleanup();
      setCharacterBackground(4);
  });
});

//left option
$("#leftChoice").click(function ()
{
    var currentStage = localStorage.getItem("stage")*1; // Loads Current stage from storage then type casts by multiplying
    var newLeft = (getStage(currentStage)).optionLeftNext; // Gets the Next Option stage value based on the left option
    localStorage.setItem("stage", newLeft); // saves the new stage value
    var stage = getStage(newLeft); // gets stage object of new value
     changeText(stage.optionLeft,stage.optionRight,stage.sceneText); // Changes the UI to match the stage object
     $("#stage").text("NextLeftScene: " + stage.optionLeftNext + " || " + "Stage: " + newLeft +  " || " + "NextRightScene: " + stage.optionRightNext);// Updates the Devtool Screen Helper
});

//right option
$("#rightChoice").click(function () {
    var currentStage = localStorage.getItem("stage")*1; // Loads Current stage from storage then type casts by multiplying
    var newRight = (getStage(currentStage)).optionRightNext;// Gets the Next Option stage value based on the right option
    localStorage.setItem("stage", newRight);// saves the new stage value
    var stage = getStage(newRight);// gets stage object of new value
    changeText(stage.optionLeft,stage.optionRight,stage.sceneText);// Changes the UI to match the stage object
    $("#stage").text("NextLeftScene: " + stage.optionLeftNext + " || " + "Stage: " + newRight +  " || " + "NextRightScene: " + stage.optionRightNext);// Updates the Devtool Screen Helper
});

} // end of Events


//TODO: make into single switch function
function levelTwoBackgroundSwap(){
$("#gameArea").css("background-image", "url('images/BackDrops/backdrop3.png')");
}
function levelThreeBackgroundSwap(){
$("#gameArea").css("background-image", "url('images/BackDrops/backdrop1.jpg')");
}

//All player Death end functions
function playerDeath()
{
$("#event").text("Oh no! Click here to play again!");
$("#leftChoice, #currentPlayer, #rightChoice").remove();
$("#gameArea").css("background-image", "url('images/BackDrops/lost.png')");
        localStorage.setItem("stage", 0);
}

//fade only the option boxes
function sideBoxesFadeOut()
{
$("#leftChoice, #rightChoice").remove();
}

// All player win functions
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


//Document Start Call
$(document).ready(function () {

    //Reset Button
    $("#event").click(function () {
        localStorage.setItem("stage", 0);
        location.reload();
    });

    var stage = localStorage.getItem("stage")* 1; //get stage number saved in local storage
    if (stage < 1)
    {
        stage = 0;
        localStorage.setItem("stage", 0);
        loadEvents(); //Load Event Handler
    }else{
    loadEvents(); //load Event Handler
    var stageObj = getStage(stage); //Get Actual Stage Object
    changeText(stageObj.optionLeft,stageObj.optionRight,stageObj.sceneText); // Change Text to Saved Level
    characterSceneCleanup(); 
    var p = localStorage.getItem("pinguin")*1; //load penguin from storage
    setCharacterBackground(p); // set penguin
    }
});

