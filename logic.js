
  
// ==================================DOM variab;es========================================================================================================================================================

  var addPlayer = $("#addPlayer");
  var player1 = $("#player1");
  var player2 = $("#player2");
  var results = $("#result");
  var result1 = $("#result1");
  var result2 = $("#result2");
  var wins1 = $("#wins");
  var losses1 = $("#losses");
  var wins2 = $("#wins2");
  var losses2 = $("#losses2");
  var notification =$("#notification");
// =================================Tally variables=======================================================================
  
  var winsP1 = 0;
  var winsP2 = 0;
  var lossesP1 = 0;
  var lossesP2 = 0;
	var rounds = 0;
  var ties = 0;

// ==================================Arrays used to seguay into different moments and rounds in the game======================================================
  var checkArray = [];
  var checkArray2 = [];
  var players = [];

  // =======================The function I use to move to different moments of the game===============================================

  // Initializing Firebase
  var config = {
    apiKey: "AIzaSyAb2W8Z3b2vF0r5tt2XywktQ6vgG-qAlFQ",
    authDomain: "rockpaperscissors-202ed.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-202ed.firebaseio.com",
    storageBucket: "rockpaperscissors-202ed.appspot.com",
    messagingSenderId: "800429658087"
  };

  firebase.initializeApp(config);

   var database = firebase.database();
   var playersRef = database.ref('/players')
  // ======================================================================================================================


// Function that adds playeers and officially begins the game
    addPlayer.on("click", function(){
       
     var playerName = $("#playerNameInput").val().trim();
     //var usersRef = database.child("users");
     //database.ref().set({name: playerName})
   
     // $("#player1").append(playerName);
    // console.log(rockPaperScissors[1]);
    
    // Array where players are pushed to verify that that they have been chosen
        players.push(playerName)
        // console.log(players);

// conditionals that create the players button options. The buttons will be furthered changed later on.
           // Player 1
         if(players.length == 1){
          $("#player1").append(playerName);

            var rock = $('<button>');
            rock.text('Rock');
            rock.attr('id', 'rock')
            rock.attr('value', 'rock')
            rock.addClass('gameButton');
            $("#player1").append(rock);
            

            var paper = $('<button>');
            paper.text('Paper');
            paper.attr('id', 'paper');
            paper.attr('value', 'paper')
            paper.addClass('gameButton');
            $("#player1").append(paper);

            var scissors = $('<button>');
            scissors.text('Scissors');
            scissors.attr('id', 'scissors');
            scissors.attr('value', 'scissors');
            scissors.addClass('gameButton');
            $("#player1").append(scissors);

          var choice1 = ('<h4 id="playerChoice1">Player 1 Choice</h4>');


          results.append(choice1);

         }
         // If player one is already in the array, player 2'a button options are created
         // Player 2
          else {
          $("#player2").append(playerName);
          addPlayer.hide();

            var rock2 = $('<button>');
            rock2.text('Rock');
            rock2.addClass('gameButton');
            rock2.attr('id', 'rock2');
            rock2.attr('value', 'rock2');
            $("#player2").append(rock2);
            

            var paper2 = $('<button>');
            paper2.text('Paper');
            paper2.addClass('gameButton');
            paper2.attr('id', 'paper2');
            paper2.attr('value', 'paper2');
            $("#player2").append(paper2);

            var scissors2 = $('<button>');
            scissors2.text('Scissors');
            scissors2.addClass('gameButton');
            scissors2.attr('id', 'scissors2');
            scissors2.attr('value', 'scissors2');
            $("#player2").append(scissors2);


             var choice2 = ('<h4 id="playerChoice2">Player 2 Choice</h4>');
             results.append(choice2);
         } 
    

// ==============================Game Button Logic==========================================
  var rock = $("#rock");
  var rock2 = $("#rock2");
  var paper = $("#paper");
  var paper2 = $("#paper2");
  var scissors = $("#scissors");
  var scissors2 = $("#scissors2");

  

   $('.gameButton').on('click', function (){

      
//Getting the value attribute from the parent function (addPlayer) and giving the buttons actions in the game
     var getThis = $(this).val();

     if(getThis == 'rock'){
      var rockArray = result1.html('rock');
      checkArray.push('rock');
      // console.log(checkArray[0]);
      $("#paper").hide();
      $("#scissors").hide();
     }

     else if(getThis == 'paper'){
       var paperArray = result1.html('paper');
       checkArray.push('paper');
       // console.log(checkArray[0]);
       $("#rock").hide();
       $("#scissors").hide();
     }

     else if(getThis == 'scissors'){
       var scissorsArray = result1.html('scissors');
       checkArray.push('scissors');
       // console.log(checkArray[0]);
       $("#paper").hide();
       $("#rock").hide();
     }
      

     else if(getThis == 'rock2'){
      var rock2Array = result2.html('rock');
      checkArray2.push('rock');
      // console.log(checkArray2[0]);
      $("#paper2").hide();
      $("#scissors2").hide();
     }

     else if(getThis == 'paper2'){
      var paper2Array = result2.html('paper');
      checkArray2.push('paper');
      // console.log(checkArray2);
      $("#rock2").hide();
      $("#scissors2").hide();
     }

     else if(getThis == 'scissors2'){
     var rockArray = result2.html('scissors');
     checkArray2.push('scissors');
     // console.log(checkArray2);
     $("#paper2").hide();
     $("#rock2").hide();
     }

     // The conditionals of Rock, Paper, Scissors based on the values being pushed and records the results
        function playRPS(){

        if((checkArray[0] == 'rock') && (checkArray2[0] == 'paper')){
        // alert('Player 2 wins!');
         notification.html(players[1] + " " +  "wins the round!");
         winsP2++;
         wins2.html(winsP2);
         lossesP1++;
         losses1.html(lossesP1);
         rounds++;
         $("#roundsNumber").html(rounds);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }

        else if((checkArray[0] == 'rock') && (checkArray2[0] == 'scissors')){
        // alert('Player 1 wins!');
         notification.html(players[0] + " " +  "wins the round!");
         winsP1++;
         wins1.html(winsP1);
         lossesP2++;
         losses2.html(lossesP2);
         rounds++;
         $("#roundsNumber").html(rounds);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }
        else if((checkArray[0] == 'scissors') && (checkArray2[0] == 'rock')){
        // alert('Player 2 wins!')
         notification.html(players[1] + " " +  "wins the round!");
         winsP2++;
         wins2.html(winsP2);
         lossesP1++;
         losses1.html(lossesP1);
         rounds++;
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }
        else if((checkArray[0] == 'scissors') && (checkArray2[0] == 'paper')){
       // alert('Player 1 wins!')
         notification.html(players[0] + " " +  "wins the round!");
         winsP1++;
         wins1.html(winsP1);
         lossesP2++;
         losses2.html(lossesP2);
         rounds++;
         $("#roundsNumber").html(rounds);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }
        else if((checkArray[0] == 'paper') && (checkArray2[0] == 'rock')){
        // alert('Player 1 wins!')
         notification.html(players[0] + " " +  "wins the round!");
         winsP1++;
         wins1.html(winsP1);
         lossesP2++;
         losses2.html(lossesP2);
         rounds++;
         $("#roundsNumber").html(rounds);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);

        }
        else if((checkArray[0] == 'paper') && (checkArray2[0] == 'scissors')){
        // alert('Player 2 wins!')
         notification.html(players[1] + " " +  "wins the round!");
         winsP2++;
         wins2.html(winsP2);
         lossesP1++;
         losses1.html(lossesP1);
         rounds++;
         $("#roundsNumber").html(rounds);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }
        else if(checkArray[0] == checkArray2[0]){
        // alert('It is a tie!')
        notification.html("Ties don't fly! Reshoot!");
         ties++
         $("#tiesNumber").html(ties);
         checkArray = [];
         checkArray2 = [];
         console.log(checkArray);
         console.log(checkArray2);
        }


      playersRef.set({
          firstPlayer: players[0],
          firstPlayerWins: winsP1,
          firstPlayerLosses: lossesP1,

          secondPlayer: players[1],
          SecondPlayerWins: winsP2,
          SecondPlayerLosses: lossesP2,
    });

          

database.ref().on("child_added", function(snapshot) {

     // console.log('------------------------------------------')
     // console.log(snapshot.val());

  // playerOneObject = snapshot.val().playerOne;
  // playerTwoObject = snapshot.val().playerTwo;
    

}, function (errorObject) {
    // console.log("The read failed: " + errorObject.code);
});
          
  }


playRPS();

   var buttonsBack = function (){
    // alert('Buttons come back now!')
      $("#rock").show();
      $("#paper").show();
      $("#scissors").show();
      $("#rock2").show();
      $("#paper2").show();
      $("#scissors2").show();
   }

// console.log(buttonsBack);

setTimeout(buttonsBack, 4000);
   })

        return false;
      });





//          var playerOneObject = {
//     name: outSideScope,
//     wins: winsP1,
//     losses: lossesP1,
    
//   }

//   var playerTwoObject = {
//     name: outSideScope,
//     wins: winsP2,
//     losses: lossesP2
//   }
//       database.ref().set({
//       playerOne: playerOneObject,
//       playerTwo: playerTwoObject,
//     });

// database.ref().on("value", function(snapshot) {

//      console.log('------------------------------------------')
//      console.log(snapshot.val());

//   playerOneObject = snapshot.val().playerOne;
//   playerTwoObject = snapshot.val().playerTwo;

// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });


