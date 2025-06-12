let scrollContainer = document.querySelector(".gallery");
let backbtn = document.querySelector("#backbtn");
let nextbtn = document.querySelector("#nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(); //will prevent the page from scrolling by default
  scrollContainer.scrollLeft += e.deltaY; //this will scroll the container by the amount of pixels the mouse wheel moved
  scrollContainer.style.scrollBehavior = "auto"; //Important because if it were "smooth", it would animate and feel laggy on every tiny wheel scroll.
//You reset it here so the scroll is immediate during mouse scrolling.
});
nextbtn.addEventListener("click", ()=>{
  // scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 200;
})
backbtn.addEventListener("click", ()=>{
   scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 200;
})