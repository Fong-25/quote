const rizz = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');


button.onclick = function(){
    fetch('https://dummyjson.com/quotes/?limit=0').then(respose => respose.json()).then(json => {
        const number = Math.floor(Math.random()*1400) + 1;
        const quote = json.quotes[number].quote;
        const auth = json.quotes[number].author;

        rizz.innerHTML = `${quote}`;
        author.innerHTML = `-${auth}`
    })
    .catch(error => console.error("Error fetching quotes:", error));
}