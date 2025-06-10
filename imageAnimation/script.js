var ImgBox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line =document.getElementById("line");

//original image width will be equal to that of the container
originalImg.style.width=ImgBox.offsetWidth + "px";

var leftSpace= ImgBox.offsetLeft; //whitespace on the left from container containing image

ImgBox.onmousemove =function(e){
  var boxwidth= (e.pageX - leftSpace) + "px" ; //boxwidth is the distance inside the container from left to the cursor
  //e.pageX;will get the position of mouse on x axis
  imgwrap.style.width = boxwidth; //imgwrap width will be equal to the boxwidth
  line.style.left =boxwidth;


}