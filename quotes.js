// Example using fetch or axios
const category = 'happiness';
const api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const apiKey = 'GAQmDgkcjcvfhvkY7uxv1w==KMIkvCgfoSdXq1gl';
const quotes = document.getElementById("quote");
const author = document.getElementById("author");

function fetchQuote() {
    fetch(api_url, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        quotes.textContent = data[0].quote;
        author.textContent = data[0].author;
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
}

fetchQuote();

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quotes.innerHTML + "----by "+author.innerHTML,"Tweet Window","width=600","height=300")
}