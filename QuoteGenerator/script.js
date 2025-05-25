const api_url= "https://zenquotes.io/api/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML=`"${data.content}"`;
  author.innerHTML=`-${data.author}`;
  // console.log(data);
}
getQuote(api_url);


//function to go to twitter and tweet the quote
function tweet(){
  window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML+" "+author.innerHTML,
     "Tweet Window", "width=600,height=400");
}