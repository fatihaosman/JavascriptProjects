const notesContainer = document.querySelector(".notes-container");
const createBtn= document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

function ShowNotes(){
  // Check if there are any notes in local storage
  // If there are, display them in the notes container
  notesContainer.innerHTML= localStorage.getItem("notes");
}
ShowNotes();
function updateStorage(){
  // Get the current content of the notes container
  // and save it to local storage
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
let  inputBox = document.createElement('p');
let img = document.createElement('img');
inputBox.className= 'input-box';
inputBox.setAttribute('contenteditable', 'true');
img.src= "images/delete.png";
notesContainer.appendChild(inputBox).appendChild(img);
  })

  notesContainer.addEventListener("click", function(e){
if (e.target.tagName === "IMG"){
  e.target.parentElement.remove();
  updateStorage();
}else if(e.target.tagName === "P"){
  notes = document.querySelectorAll(".input-box");
  notes.forEach(nt=> {
    nt.onkeyup = function(){
      updateStorage();
    }
  });
}
  })

  document.addEventListener('keydown',event =>{
    if (event.key === 'Enter') {
      // Prevent the default action (form submission)
      // and insert a line break instead
      document.execCommand('insertLineBreak');
        event.preventDefault();
    }
  })