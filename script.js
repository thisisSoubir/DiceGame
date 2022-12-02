let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage = "images/dice" + randomNumber1 + ".png";

image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

// Dice 2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = "images/dice" + randomNumber2 + ".png";

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);


// Changeing Heading 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Draw!!!🚩";
}