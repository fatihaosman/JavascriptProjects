let speech = new  SpeechSynthesisUtterance();//This creates a new speech object.Think of speech as a container that will hold:
//The text to speak.
//The voice used.
//Pitch, rate, volume (you can add these too if needed).

let voices =[];//An empty array to store all the available voices (male, female, different accents, etc.) that your browser provides.
let voiceSelect = document.querySelector("select");

//this function will populate the voice select
window.speechSynthesis.onvoiceschanged=()=>{
  voices = window.speechSynthesis.getVoices();//Gets all the available system voices and saves them into your voices array.
  speech.voice = voices[0]; // will be the default voice , the first one
  voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));// populate the voice select with the available voices
//This line populates the <select> dropdown:
// Creates a new <option> for each voice.
// Shows voice.name as the label (e.g., “Google UK English Male”).
// Sets the value as the index i.

  voiceSelect.addEventListener("change",()=>speech.voice = voices[voiceSelect.value]);//this is to allow the user to change the voice
};
document.querySelector("button").addEventListener("click",()=>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
})
// When the button is clicked:
// It gets the text from the <textarea>.
// Sets it as speech.text.
// Calls speechSynthesis.speak(speech) to start speaking it out loud.
