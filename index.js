var randomvariable1 = Math.floor((Math.random() * 6) + 1);
var randomvariable2 = Math.floor((Math.random() * 6) + 1);
// console.log(randomvariable1);
var dice1 = "dice" + randomvariable1 + ".png";
var finalimage1 = "images/" + dice1;
console.log(finalimage1);
var finalimage2 = "images/dice" + randomvariable2 + ".png";
document.querySelector('.dice img').setAttribute("src",finalimage1);
document.querySelector('.img2 ').setAttribute("src",finalimage2);
if(randomvariable1>randomvariable2){
 document.querySelector('h1').innerHTML= "🚩player1 wins";

}
else if(randomvariable2 >  randomvariable1){
 document.querySelector("h1").innerHTML = "player2 wins🚩";
}
else{
 document.querySelector("h1").innerHTML =  "Draw just like the 2019 world cup finals";
}