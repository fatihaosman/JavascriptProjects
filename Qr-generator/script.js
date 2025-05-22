let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");
function generateQR(){
  if(qrText.value.length > 0){
     //the qr code will be generated using the qrserver api
  //the qr will be generated baed on the text in the input field
  qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
  //adding the classname to the image
  imgBox.classList.add("show-img");
  }else{
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('.error');
    }, 1000);//remove the error class after 1 second
  }
 
}