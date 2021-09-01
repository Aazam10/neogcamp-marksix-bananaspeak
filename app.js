// var username=prompt("what is your name");
// alert("welcome js is working"+" "+ username);

var btnTranslate = document.querySelector("#btn-translate");
var btnInput = document.querySelector("#txt-Input");
var btnOutput = document.querySelector("#txt-output");


serverUrl = "https://api.funtranslations.com/translate/minion.json";


function makeUrl(inputText) {
    return serverUrl + "?" + "text=" + inputText;

}
function clickHandler() {

    var text = btnInput.value;
    var url = makeUrl(text);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            btnOutput.innerText = translatedText;
        }).catch(err => alert("some error occured please try again later"));

}
btnTranslate.addEventListener("click", clickHandler);