// JavaScript Source Code
// Original Author: PorkyProductions
// Language: javascript es6
// Path: js\Header.js

$(document).ready(function () {
    OnStart();
})

function ModifyHeader() {
    console.log(DEVICE_type);
    if (DEVICE_type == "mobile") {
        $("#logoText").hide();
    }
}

let title = document.getElementById("title");
let titleText = document.getElementById("titleText");
function ChangeTitle(text) {
    title.style.display = "block";
    titleText.innerHTML = text;
}

function OnStart() {
    //all code will run on load
    console.log("ready");
    ModifyHeader();
    let author = "PorkyProductions"

    console.log("Header.js loaded");
    console.log(title);
    console.log(titleText);
    console.log(author);
    console.log(authorText);
}
