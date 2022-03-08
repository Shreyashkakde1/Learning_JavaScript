// ---------------------------------------------------------------------------------------

// Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt("What is your Birthyear...Good Firend");
  var ageInDays = (2022 - birthYear) * 365;
  console.log(ageInDays);
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "Your are :" + ageInDays + " Days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// ---------------------------------------------------------------------------------------

// Challenge 2: Cats Genarator

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif";
  // image.src="E:\Coding\JavaScript\Challenge 1\static\images\cat.jpg";
  div.appendChild(image);
}

// ---------------------------------------------------------------------------------------

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
  // console.log("Human Choice "+yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  // console.log("Computer Choise"+botChoice);
  results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
  // console.log("Result: "+results);
  message = finalMessage(results);
  // console.log(message);
  rpsForntEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "you lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "you tied!", color: "yellow" };
  } else {
    return { message: "you Won!", color: "green" };
  }
}

function rpsForntEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // To Remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    " <img src='" +
    imageDatabase[humanImageChoice] +
    "' hight=150px width=150px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px ; padding: 30px; '> " +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    " <img src='" +
    imageDatabase[botImageChoice] +
    "' hight=150px width=150px style='box-shadow: 0px 10px 50px rgba(243,38,24,1);' >";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

// Challenge 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllButtons = [];
for (var i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonTingy){
    // console.log(buttonTingy.value);
    if(buttonTingy.value==='red'){
      buttonsRed();
    }else if(buttonTingy.value === 'green'){
      buttonGreen();
    } else if(buttonTingy.value === 'reset'){
      buttonColorRest();
    } else if(buttonTingy.value === 'random'){
      randomColors();
    }
}
function buttonsRed(){
  for(var i=0;i<all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonGreen(){
  for(var i=0;i<all_buttons.length;i++){f
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorRest(){
    for(var i=0;i<all_buttons.length;i++){
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
  var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
  for(var i=0;i<all_buttons.length;i++){
    var randomNumber = Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}