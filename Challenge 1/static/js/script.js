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

    function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif";
    // image.src="E:\Coding\JavaScript\Challenge 1\static\images\cat.jpg";
    div.appendChild(image);
    }