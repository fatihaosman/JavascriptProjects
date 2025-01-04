const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("write something");
    }else{
        let li=document.createElement("li");
        //The line let li=document.createElement("li"); creates a new list item element, 
        //which is essential for properly adding, styling, and interacting with tasks in the list.
        // Directly assigning inputBox.value to listContainer would not achieve the same functionality
        // and would likely break the intended behavior of your to-do list application.

        li.innerHTML = inputBox.value; /*so the value inside inputbox is added to the li */
        listContainer.appendChild(li) /*this value should be displayed and it will be displayed inside the list container */

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
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