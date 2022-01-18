function getRandomInt1(num){
    return Math.ceil(Math.random() * num);
}
function getRandomInt2(num){
    return Math.ceil(Math.random() * num);
}

var P1=getRandomInt1(6);
var P2=getRandomInt2(6);


var randomDiceImage = P1 + ".png";

var imageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource1);

var randomDiceImage2 = P2 + ".png";

var imageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);


if (P1 > P2) {
   document.getElementById("Heading").innerHTML = "Player 1 wins 🏆";
}else if(P1 < P2) {
    document.getElementById("Heading").innerHTML = "Player 2 wins 🏆";
}else{
    document.getElementById("Heading").innerHTML = "No one wins, Roll the dice again 😉";
}