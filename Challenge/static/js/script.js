// ---------------------------------------------------------------------------------------

// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("What is your Birthyear...Good Firend");
    var ageInDays = (2022 - birthYear) * 365;
    console.log(ageInDays);
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("Your are :" + ageInDays + " Days old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// ---------------------------------------------------------------------------------------

// Challenge 2: Cats Genarator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif";
    // image.src="E:\Coding\JavaScript\Challenge 1\static\images\cat.jpg";
    div.appendChild(image);
}

// ---------------------------------------------------------------------------------------

             // Challenge 3: Rock, Paper, Scissors

    function rpsGame(yourChoice){
            console.log("Human choice "+yourChoice);
        var humanChoice,botChoice;
        humanChoice = yourChoice;
        botChoice = numberToChoice(randToRpsInt());
           console.log("Computer choice "+botChoice);
        results = decideWinner(humanChoice,botChoice) // [1,0] human won || bot loss
            console.log(results);
        // message = finalMessage(results); 
        // rpsFrontEnd(yourChoice.id, botChoice, message);
    }

    // Function to create random choice for bot/computer
    function randToRpsInt(){
        return Math.floor(Math.random()*3);
    }

    function numberToChoice(number){
        return ['rock', 'paper', 'scissors'][number];
    }

    function decideWinner(yourChoice,computerChoice){
       var rpsDatabase={
           'rock':{'scissors':1, 'rock': 0.5, 'paper': 0},
           'paper':{'rock': 1, 'paper': 0.5, 'scissors':0},
            'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0}
       };
        var yourScore = rpsDatabase[yourChoice][computerChoice];
        var computerScore = rpsDatabase[computerChoice][yourChoice];
        
    //    if(computerChoice === 0){
    //         computerChoice = 'rock';
    //    } else if(computerChoice===1){
    //        computerChoice='paper';
    //    } else if (computerChoice===2){
    //        computerChoice = 'scissors';
    //    }

 

       return [yourScore][computerScore];
    }
    



// function rpsGame(yourChoice) {
//     console.log(yourChoice);
//     var humanChoice, botChoice;
//     humanChoice = yourChoice.id;

//     botChoice = numberToChoice(randToRpsInt());
//     console.log("Compter Choice: ", botChoice);
    
//     result = decideWinner(humanChoice, botChoice); // [1,0] Human won || bot loss
//     console.log(result);
    
//     message = finalMessage(result);
//     console.log(message);
//     // rpsFrontEnd(yourChoice.id, botChoice, message)

// }

// function randToRpsInt() {
//     return Math.floor(Math.random() * 3);
// }

// function numberToChoice(number) {
//     return ['rock', 'paper', 'scissors'][number];

// }

// function decideWinner(yourChoice, computerChoice) {
//     var rpsDatabase = {
//         'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
//         'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
//         'scissors': { 'paper': 1, 'sicssors': 0.5, 'rock': 0 }
//     };
//     var yourScore = rpsDatabase[yourChoice][computerChoice];
//     var computerScore = rpsDatabase[computerChoice][yourChoice];
//     return [yourScore][computerScore];
// }

// function finalMessage(yourScore, computerScore) {
//     if (yourScore === 0) {
//         return { 'message': 'You lost1', 'color': 'red' };
//     }
//     else if (yourScore === 0.5) {
//         return { 'message': 'you tied!', 'color': 'yellow' };
//     }
//     else {
//         return { 'message': 'You won!', 'color': 'green' };
//     }
// }
