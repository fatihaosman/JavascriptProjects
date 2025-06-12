let popup =document.getElementById("popup");

function openPopUp() {
  popup.classList.add("open-popup"); /*here is like giving the poup another classlist called open-popup */
}
function closePopUp() {
  popup.classList.remove("open-popup"); /*then remove the poup */
}

/*
so user clicks submit - function openpopup is called
-this sunction add the classlist called open-popup
-this classlists hhas several styling
translate,scale and visisbility that enables the poup tom appear

then user clicks on okay the function closepopup is called
-this function  removes the classlist called open-popup
- so now only the opup the classlist  applies, this enables the poup to close, it moves upwards using translate, scales to  0.1 making the effect of becoming small then visbility hidden makes the effect of disappearing
 */