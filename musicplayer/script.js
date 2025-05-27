//on input tha we added using audio
let progress = document.getElementById("progress");
//on audio itself
let song = document.getElementById("song");
//on the playbutton at the center
let ctrIcon = document.getElementById("ctrIcon");

song.onloadedmetadata = function(){
  // Set the max value of the progress bar to the song's duration
  progress.max = song.duration;
  // Set the initial value of the progress bar to 0
  progress.value=song.currentTime;
}
//<i class="fa-solid fa-pause"></i>

let intervalId = null;

function playpause() {
  if (ctrIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrIcon.classList.remove("fa-pause");
    ctrIcon.classList.add("fa-play");

    // stop updating the progress bar
    clearInterval(intervalId);
  } else {
    song.play().then(() => {
      ctrIcon.classList.remove("fa-play");
      ctrIcon.classList.add("fa-pause");

      // update the progress bar every second
      intervalId = setInterval(() => {
        progress.value = song.currentTime;
      }, 1000);
    });
  }
}


//updating the time after every 500 miliseconds so that the bar moves showing progress
// if (song.play()){
//   setInterval(()=>{
//     progress.value = song.currentTime;
//   },10 * 1000); //1 second interval
// }

// song.ontimeupdate = function() {
//   progress.value = song.currentTime;
// };



progress.onchange=function(){
  //make sure the song is playing when we click on the progress bar
  song.play();
  //Set the current time of the song to the value of the progress bar
  song.currentTime = progress.value;
  //when the audio is playing, change the icon to pause
  ctrIcon.classList.remove("fa-play");
  ctrIcon.classList.add("fa-pause");

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    progress.value = song.currentTime;
  }, 1000);
}


song.onended = function () {
  clearInterval(intervalId);
  ctrIcon.classList.remove("fa-pause");
  ctrIcon.classList.add("fa-play");
  progress.value = 0;
};


// When the page loads, pause the song and set the icon to play
window.onload = function() {
  song.pause();
  ctrIcon.classList.remove("fa-pause");
  ctrIcon.classList.add("fa-play");
};



function skipForward() {
  if (song.currentTime <= song.duration - 10) {
    song.currentTime += 10;
  } else {
    song.currentTime = song.duration;
  }

  // Resume song if it was paused
  song.play().then(() => {
    ctrIcon.classList.remove("fa-play");
    ctrIcon.classList.add("fa-pause");

    clearInterval(intervalId);
    intervalId = setInterval(() => {
      progress.value = song.currentTime;
    }, 1000);
  });
}


function skipBackward() {
  if (song.currentTime >= 10) {
    song.currentTime -= 10;
  } else {
    song.currentTime = 0;
  }

  // Resume song if it was paused
  song.play().then(() => {
    ctrIcon.classList.remove("fa-play");
    ctrIcon.classList.add("fa-pause");

    clearInterval(intervalId);
    intervalId = setInterval(() => {
      progress.value = song.currentTime;
    }, 1000);
  });
}





// This is a simple music player using HTML, CSS, and JavaScript
// It allows you to play, pause, and seek through a song.
// The player has a progress bar that shows the current time of the song
// The player also has skip forward and skip backward buttons
// The player uses the HTML5 audio element to play the song





// play and pause buttons
// the  progress is shown after every miliseconds
// then we ca click on the progress bar too move the song to that point
//when you refresh the page the song is paused and the icon is play