var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgUrl1 = "Images/dice" + randomNumber1 + ".png";

var imgSource1 = document.querySelectorAll("img")[0];
imgSource1.setAttribute("src", imgUrl1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var imgUrl2 = "Images/dice" + randomNumber2 + ".png";

var imgSource2 = document.querySelectorAll("img")[1];
imgSource2.setAttribute("src", imgUrl2);

//player 1 won

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
