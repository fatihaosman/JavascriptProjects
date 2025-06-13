// let number =document.getElementById("number");

// let counter=0;

// setInterval(() => {
//   if(counter == 65){
//     clearInterval();
//   }else{
//     counter+=1;
//   number.innerHTML = counter + "%";v
//   }
  
// }, 30);

let numbers = document.querySelectorAll(".number");

let targets = [65, 80, 45]; // desired percent for each circle
numbers.forEach((numDiv, index) => {
  let counter = 0;
  let target = targets[index];

  let interval = setInterval(() => {
    if (counter == target) {
      clearInterval(interval);
    } else {
      counter += 1;
      numDiv.innerHTML = counter + "%";
    }
  }, 30);
});
