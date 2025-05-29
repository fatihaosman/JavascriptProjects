let [seconds, minutes, hours] = [0, 0, 0];//creating array to store time
let displayTime = document.getElementById("display-time");
let timer = null;//variable to store the timer
function stopwatch(){
  //when seconds hit 60 then we reset seconds to 0 and increment minutes
  //when minutes hit 60 then we reset minutes to 0 and increment hours
  seconds++;
  if(seconds ==  60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++;
    }
  }

let h = hours < 10 ? "0" + hours : hours; //if hours is less than 10 then we have to add 0 before it
let m = minutes < 10 ? "0" + minutes : minutes; //if minutes is less than 10 then we have to add 0 before it
let s = seconds < 10 ? "0" + seconds : seconds; //if seconds is less than 10 then we have to add 0 before it


  displayTime.innerHTML = h + ": " + m + ": " + s;
  //we have to dsplay the running time in the displayTime element 
}
//we have to execute the above function by one second for that we have to use the javascript setInterval function
function watchstart(){
  //if the timer is already running then we have to clear the previous timer
  //and start a new timer
  if(timer !== null){//if timer is not null then we have to clear the timer
    clearInterval(timer);//clear the previous timer
  }
  timer = setInterval(stopwatch, 1000);//1000 milliseconds = 1 second,it will execute the stopwatch function every second
}

function watchstop(){
  clearInterval(timer);//clear the timer when we stop the stopwatch
  // timer = null;//set the timer to null so that we can start a new timer when we click on start button again
}
function watchreset(){
  clearInterval(timer);//clear the timer when we reset the stopwatch
  [seconds, minutes, hours] = [0, 0, 0]; //reset the time to 0
  displayTime.innerHTML = "00: 00: 00"; //reset the display time to 0
}

