const accessKey= "JTLWQkLrbJbC1fITyrZS1wIccySqxmb6ug_T3n3vr9Y";

const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("search-result");
const searchBox = document.getElementById("search-box");
const showmorebtn = document.getElementById("show-more-btn");



let keyword="";
let page=1;

async function searchImages() {
 keyword=searchBox.value;
  //we aaree adding the  api 
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


  const response= await fetch (url);
  const data = await response.json();

  if(page===1){
    searchResult.innerHTML="";
  }


  const results = data.results;
  /*create anew image tag and add the image */
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;

    /*link is added in ann a-tag */
    const imagelink=document.createElement("a");
    imagelink.href=result.links.html;
    imagelink.target="_blank";

    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  })
  showmorebtn.style.display="block";
}
searchForm.addEventListener("submit", (e)=>{
e.preventDefault();
page=1;
searchImages();
})


showmorebtn.addEventListener("click", ()=>{
  page++;
  searchImages();
})
