// var username=prompt("what is your name");
// alert("welcome js is working"+" "+ username);

// var btnTranslate=document.querySelector("#btn-translate");
// var btnInput=document.querySelector("#txt-Input");
// var btnOutput=document.querySelector("#txt-output");

// var clickHandler= function clickHandler(){
//     btnOutput.innerHTML=`<div style="margin:10px auto; display:block; max-width:450px;">${btnInput.value}</div>`;
// }


// btnTranslate.addEventListener("click",clickHandler)
var urlGenerator=function makeUrl(text){
    var url="https://api.funtranslations.com/translate/minion.json?text="+text;
    return url;
}

var finUrl=urlGenerator("I am superman");
fetch(finUrl).then(response=>{
    return response.json();
}).then(json=>{
    console.log(json.contents.translated);
});
