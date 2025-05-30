var pass=document.getElementById("password");
var msg=document.getElementById("message");
var str=document.getElementById("strength");

pass.addEventListener("input",()=>{
  if(pass.value.length > 0){
    msg.style.display ="block";
  }
  else{
    msg.style.display="none";
  }
  if(pass.value.length < 4){
    str.innerHTML="weak";
    pass.style.borderColor="red";
    str.style.color="red";
  }else if(pass.value.length >= 4 && pass.value.length < 8){
    str.innerHTML="medium";
    pass.style.borderColor="orange";
    str.style.color="orange";
  }else if(pass.value.length>=8){
    str.innerHTML="strong";
    pass.style.borderColor="green";
    str.style.color="green";
  }
})
