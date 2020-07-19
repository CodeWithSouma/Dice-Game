// first palyer's dicee
var randomNumber1 = Math.round(Math.random()*5)+1;// random number between 1 - 6
var firstRandomDiceImage = "dice"+randomNumber1+".png";// randome dice image between 1 - 6
var randomImageSource1 = "images/"+firstRandomDiceImage;// images/dice1.png - images/dice6.png 
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

//second player's dicee
var randomNumber2 = Math.round(Math.random()*5)+1;// random number between 1 - 6
var secondRandomDiceImage = "dice"+randomNumber2+".png";// randome dice image between 1 - 6
var randomImageSource2 = "images/"+secondRandomDiceImage;// images/dice1.png - images/dice6.png 
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//winning condition and chance message according to it
if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player1 win!";
else if(randomNumber2>randomNumber1)
    document.querySelector("h1").innerHTML = "Player2 win! 🚩";
else
    document.querySelector("h1").innerHTML = "Draw!";