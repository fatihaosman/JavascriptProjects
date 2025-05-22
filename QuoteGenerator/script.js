const api_url = "https://zenquotes.io/api/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = `"${data[0].q}"`;
    author.innerHTML = `- ${data[0].a}`;
  } catch (error) {
    quote.innerHTML = `"Failed to load quote."`;
    author.innerHTML = `Try again later.`;
    console.error("Fetch error:", error);
  }
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerText + " " + author.innerText,
    "Tweet Window",
    "width=600,height=400"
  );
}
