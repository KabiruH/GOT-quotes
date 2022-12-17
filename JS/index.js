//URLS
let randomQuotes = "https://api.gameofthronesquotes.xyz/v1/random/5"
let houses = "https://api.gameofthronesquotes.xyz/v1/houses"
let charactersList = "https://api.gameofthronesquotes.xyz/v1/characters"

document.addEventListener ("DOMContentLoaded", () => {
//Several random Quotes
const loadRandomQuote = () => {
    fetch (randomQuotes)
    .then ((res) => res.json())
    .then ((data => {      
    }))
}




//Houses and their members
fetch (houses)


// Characters list and their quotes
fetch (charactersList)

})
