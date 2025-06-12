var nameError =document.getElementById("name-error");
var phoneError =document.getElementById("phone-error");
var emailError =document.getElementById("email-error");
var messageError =document.getElementById("message-error");
var submitError =document.getElementById("submit-error");


//function that will validate the input box
//will be executed whenever we tyype anything in the input field
function validateName(){
var name=document.getElementById('contact-name').value;//store what will be written in the name input

if(name.length == 0){
  nameError.innerHTML="Name is required";
  return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
  nameError.innerHTML="Write full name";
}
else{
  nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}


function validatePhone(){
  var phone =document.getElementById('contact-phone').value;
  if(phone.length==0){
    phoneError.innerHTML="Phone NO is required";
    return false;
  }
  if(phone.length !==10){
    phoneError.innerHTML="must be 10 digits";
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML="only digits";
    return false;
  }
  else{
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

}


function validateEmail(){
  var email =document.getElementById('contact-email').value;
  if(email.length ==0){
    emailError.innerHTML='email is required';
    return false;
  }
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML="email invalid";
  return false;
}
else{
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}


function validateMsg(){
  var message=document.getElementById('contact-msg').value;
  var required=30;
  var left =required-message.length;

  if(left > 0){
    messageError.innerHTML=left + 'more characters required';
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
    submitError.style.display='block';
    submitError.innerHTML="Please fix error to submit";
    setTimeout(function(){submitError.style.display.display='none';},3000);
    return false;
  }
  // submitError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  // return true;
}

