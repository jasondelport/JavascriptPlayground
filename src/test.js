

let width = 2048
let height = 1448

var heightOnePercent = height / 100;
var widthOnePercent = width / 100;
var imageCurrentPercent = 100 / widthOnePercent;
var imageNewHeight = Math.round(heightOnePercent * imageCurrentPercent);

console.log(imageNewHeight)