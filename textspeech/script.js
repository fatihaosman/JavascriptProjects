let speech = new  SpeechSynthesisUtterance();

let voices =[];
let voiceSelect = document.querySelector("select");

//this function will populate the voice select
window.speechSynthesis.onvoiceschanged=()=>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // will be the default voice
  voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));// populate the voice select with the available voices

  voiceSelect.addEventListener("change",()=>speech.voice = voices[voiceSelect.value]);//this is to allow the user to change the voice
};
document.querySelector("button").addEventListener("click",()=>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
})
