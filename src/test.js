import fetch from "node-fetch";

let width = 2048
let height = 1448

var heightOnePercent = height / 100;
var widthOnePercent = width / 100;
var imageCurrentPercent = 100 / widthOnePercent;
var imageNewHeight = Math.round(heightOnePercent * imageCurrentPercent);

console.log(imageNewHeight)


fetch('http://localhost:5000/api/proxy/int/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'username=kiosk1@keytree.co.uk&password=Plokij8u12!'
}).then((value) => console.log(value))