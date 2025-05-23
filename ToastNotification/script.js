let toastBox = document.getElementById("toast-box");
let successBtn = document.getElementById("success-btn");
let successMessage="<i class='fa-solid fa-circle-check'></i> successfully submited";
let errorMessage="<i class='fa-solid fa-xmark'></i> error";
let inavliMessage="<i class='fa-solid fa-exclamation'></i> invalid input, check again";

function ShowToast(msg){
  let toast =document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML=msg;
  toastBox.appendChild(toast);
  if(msg.includes("error")){
    toast.classList.add("error");
  }
  if(msg.includes("invalid")){
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);


}




/*
taost notification
--putting the text at the edge of the body
--i have a toastb-x div this is where i append the toast div that will have the inner.html text
--want each text to have its own display message ,
let successMessage="successfullt submited";
let errorMessage="error";
let inavliMessage="invalid input, check again";
-then put this messages inside
onclick="ShowToast(successMessage)"


then for the main function just add a msg as the parameters which will be passed  to the toast div createdfunction ShowToast(msg){
  let toast =document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML=msg;
  toastBox.appen




  used font awsome imported the icons
  ensured the icons are of differeent color we had to add the::
  if(msg.includes("error")){
    toast.classList.add("error");
  }
  if(msg.includes("invalid")){
    toast.classList.add("invalid");
  }

  then we have to hide the notification after awhile
   setTimeout(() => {
    toast.remove();
  }, 3000); setTimeout(() => {
    toast.remove();
  }, 3000);

 */