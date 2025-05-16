const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
const timeBox = document.getElementsByClassName(".timebox");

// Get both buttons
const addBtn = document.getElementById("add-btn");
const durationBtn = document.getElementById("duration-btn");
const durationPopup = document.getElementById("duration-popup");
const submitDuration= document.getElementById("submit-duration");
//duration 
let currentDuration = "";
function addTask(){
    if(inputBox.value === ""){
        alert("write something");
    }else{
        let li=document.createElement("li");
        //The line let li=document.createElement("li"); creates a new list item element, 
        //which is essential for properly adding, styling, and interacting with tasks in the list.
        // Directly assigning inputBox.value to listContainer would not achieve the same functionality
        // and would likely break the intended behavior of your to-do list application.

        li.innerHTML = inputBox.value; /* li.innerHTML = inputBox.value;   
        so the value inside inputbox is added to the li */

         // Add duration span if one exists
        if (currentDuration) {
            const durationSpan = document.createElement("span");
            durationSpan.textContent = currentDuration;
            durationSpan.style.fontSize = "12px";
            durationSpan.style.color = "gray";
            durationSpan.style.marginLeft = "10px";
            li.appendChild(durationSpan);

            currentDuration = ""; // Clear after use
        }
        

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

        listContainer.appendChild(li) /*this value should be displayed and it will be displayed inside the list container */

        addBtn.style.display = "none";
        durationBtn.style.display = "inline-block";
    }
    inputBox.value= ""; // clears the input field, preparing it for a new task.
    
    saveData(); 
    // when we input its called to save
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        /*when we check or uncheck its called to save the changes again */
    }else if (e.target.tagName === "SPAN"){
           e.target.parentElement.remove(); /*PARENTELEMNT IS THE LI ELEMENT */
           saveData();
            /*to save changes when item is deleted */
    }
}, false);



//logic that did not work-skip this comment
/*addBtn.addEventListener("click", function () {
  addBtn.style.display = "none";
  durationBtn.style.display = "inline-block";
});*/

submitDuration.addEventListener("click", function () {
  const hours = document.getElementById("hours").value || 0;
  const minutes = document.getElementById("minutes").value || 0;
  const seconds = document.getElementById("seconds").value || 0;

  // Format duration
  let formatted = " ";
  if (hours > 0) formatted += `${hours}h `;
  if (minutes > 0) formatted += `${minutes}m `;
  if (seconds > 0) formatted += `${seconds}s`;

  currentDuration = formatted.trim(); // Save for use in the next task

  durationPopup.style.display = "none";
  durationBtn.style.display = "none";
  addBtn.style.display = "block";
});


durationBtn.addEventListener("click", function () {
  durationPopup.style.display = "block"; // show the popup
});

//logic that did not work-skip this comment
/*submitDuration.addEventListener("click", function () {
    durationPopup.style.display = "none"; 
    durationBtn.style.display = "none";
    addBtn.style.display = "block";
  
});*/

submitDuration.addEventListener("click", function () {
  const hours = document.getElementById("hours").value || 0;
  const minutes = document.getElementById("minutes").value || 0;
  const seconds = document.getElementById("seconds").value || 0;

  // Format duration
  let formatted = "⏱ ";
  if (hours > 0) formatted += `${hours}h `;
  if (minutes > 0) formatted += `${minutes}m `;
  if (seconds > 0) formatted += `${seconds}s`;

  currentDuration = formatted.trim(); // Save for use in the next task

  durationPopup.style.display = "none";
  durationBtn.style.display = "none";
  addBtn.style.display = "block";
});



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}/*listContainer.innerHTML is the data we want to save */
//saveData() saves the current state of the task list to the browser’s local storage, so that the data persists even after refreshing the page.
//localStorage.setItem("data", listContainer.innerHTML); 
//stores the HTML content of the listContainer under the key "data".

// when we refresh the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    /* will give all content stored in the browser with the name of data*/
}
showTask();


//logic that i havent added yet
/* 
if hours and minutes anre 0

*/


