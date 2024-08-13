const textarea = document.querySelector("textarea");
voiceList = document.querySelector("select");
speechBtn = document.querySelector("button");

let synth = speechSynthesis;

function voices(){
    for(let voice of synth.getvoices()){
        console.log(voice);
}


function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

speechBtn.addEventListener("click",e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        textTOspeech(textarea.value);
        
    }
});
}
