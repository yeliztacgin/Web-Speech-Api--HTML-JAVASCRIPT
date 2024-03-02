let txt = document.getElementById("txt");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let text = txt.value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en";
    speechSynthesis.speak(utterance);

});
