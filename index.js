// If and If else statements //
if (true) {
    console.log("hello world");
}
var isRainning = false;
if (isRainning) {
    console.log("wear sunglasses");
}
else {
    console.log("wear rain coat");
}
var weather = "cloudy";
if (weather == "raining") {
    console.log("wear a rain coat");
}
else if (weather == "cloudy") {
    console.log("wear a light jacket");
}
else {
    console.log("wear a sunglasses");
}
// Tarnary Operators 
var isHungry = "false";
var snack = isHungry ? "apple" : "water";
console.log(snack);
var myAge = 18;
snack = myAge >= 18 ? "you are allowed" :
    "your are not allowed";
console.log(snack);
