/*
    Name: Christopher Messer
    Date: August 24, 2014
    Assignment: Goal3: Assignment: Duel3
 */

//self-executing function
(function(){

    console.log("FIGHT!!!"); //console.log used to be sure the .js file is set up and working correctly

    //DOM pieces
    var fighter1_txt = document.getElementById("mf"); //DOM var added for fighter1 Mask Face
    var fighter2_txt = document.getElementById("tg"); //DOM var added for fighter2 Tattoo Guy
    var round_txt = document.getElementById("round_number"); //DOM var added for round number
    var button = document.getElementById("fight_btn"); //DOM var added for the main fight button

    //Old Code - changed everything from array to DOM
    //var fighter1=["Mask Face", 20, 100];    //set up array for Fighter 1
    //var fighter2=["Tattoo Guy", 20, 100];   //set up array for Fighter 1

    //Old Code - changed everything to arrays
    //player name
    //var playerOneName = "Mask Face"; //var set up to give player 1 a name
    //var playerTwoName = "Tattoo Guy"; //var set up to give player 2 a name

    //player damage
    //var player1Damage = 20; //var set up to set damage attributes for each player.
    //var player2Damage = 20; //both damages set to 20, random number selected between 0-20 and subtracted from health

    //player health
    //var playerOneHealth = 100; //var set up for player health attributes.
    //var playerTwoHealth = 100; //each player begins with 100 and health is lost based on random number generated

    //var round=0; //var set up to begin with round 0. number is set at 0 so when the first round ends the alert will say that round 1 has ended.

    //Setup Click Event
    button.addEventListener("click", fight, false);

    //Setup Fighters Array
    var fighters = [
        {
            name:"Mask Face",
            damage:20,
            health:100
        },
        {
            name: "Tattoo Guy",
            damage: 20,
            health: 100
        }];

    var round = 0;

    //Initializing the DOM for the top of the HTML page
    round_txt.innerHTML = "Click the FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    //Beginning of the fight function
    function fight(){

        //set up message to alert the user of the player name and starting health
        //changed to reflect the new arrays
        alert(fighter1[0]+": "+fighter1[2]+"   *START*   "+fighter2[0]+": "+fighter2[2]);

        for(var i=0; i<10;i++){

            //random formula is - Math.floor(Math.random()*(max-min)+min);
            //updated to reflect the arrays
            var minDamage1 = fighter1[1] * .5; //var set for player1 minimum damage being equal to player1Damage multiplied by .5
            var minDamage2 = fighter2[1] * .5; //var set for player2 minimum damage being equal to player1Damage multiplied by .5
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //var set for randomizing the number that the player1 is damaged by.
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //var set for randomizing the number that the player2 is damaged by.

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //updated to reflect the new arrays
            fighter1[2]-=f1; //damage that is inflicted on the player based on the random number generated for f1
            fighter2[2]-=f2; //damage that is inflicted on the player based on the random number generated for f2

            console.log(fighter1[0]+": "+fighter1[2]+" "+fighter2[0]+": "+fighter2[2]); //testing to make sure code is still running correctly

            var results = winnerCheck(); //var set for results to notify the user of the winner
            console.log(results); //test to make sure results are showing in the console

            //pseudocode for if/else statement below
            //if there is no winner at the end of the round
                //alert the user with player1 name and current health and player2 name and current health with the ending round in between the names
            //else if there is a winner, end program and show message from winnerCheck function below

            if(results==="no winner"){
              round++;
              alert(fighter1[0]+": "+fighter1[2]+"   *ROUND "+round+" OVER*   "+fighter2[0]+": "+fighter2[2]);
            //updated the code to reflect the new arrays at line 66
            }else{
              alert(results);
              break;
            };

        };
    };

    function winnerCheck(){ //begin winnerCheck function to determine if there is a winner, if not cycle back through to earlier code
        console.log("in winnerCheck FN"); //test to make sure program is working correctly and displaying all the rounds, health status and winner or no winner

        var result = "no winner"; //var set up for notification of no winner yet

        //pseudocode for if/else statement below
        //if player1 and player2 both have total health less than 1 then both players die
        //else if player1 has health less than 1, but player2 does not, then player2 wins notification
        //else if player2 has health less than 1, but player1 does not, then player1 wins notification

        if(fighter1[2]<1 && fighter2[2]<1) { //updated the if else if statements to reflect the new arrays being used in the code
            result = "You Both Die";
        } else if(fighter1[2]<1){
            result = fighter2[0]+" WINS!!!"
        } else if(fighter2[2]<1){
            result = fighter1[0]+" WINS!!!"
        };

        return result; //returning the results of each round back to the if/else statement above determining no winner or to the if/else if statement determining who the winner is

    };

    /******* The program gets started below *******/
    console.log('program starts')
    fight(); //begins the program and display the FIGHT!!! message at the beginning of the code

})();