var ImgBox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line =document.getElementById("line");

//original image width will be equal to that of the container
originalImg.style.width=ImgBox.offsetWidth + "px";

var leftSpace= ImgBox.offsetLeft; //whitespace on the left from container containing image

ImgBox.onmousemove =function(e){
  var boxwidth= (e.pageX - leftSpace) + "px" ; //boxwidth is the distance inside the container from left to the cursor ...How far inside the image box is my cursor?"
  //e.pageX;will get the position of mouse on x axis
  imgwrap.style.width = boxwidth; //imgwrap width will be equal to the boxwidth
  line.style.left =boxwidth;
  //This moves a vertical line (like a divider) to follow your cursor, marking the boundary between the revealed and hidden parts of the image.


}