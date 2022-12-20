

document.addEventListener ("DOMContentLoaded", () => {

    //Data
    const getQuotes = document.getElementsByClassName ("quotes") 
    const getHouses = document.getElementsByClassName ("houses")
    const getCharacters = document.getElementsByClassName ("Characters")
    let quotes = []
    let selectedQuote = null
    

    //Click Events
    const randomQuote = document.getElementById ("getQuote")
    const randomHouses = document.getElementById ("getHouse")
    const randomCharacters = document.getElementById ("getCharacters")

    randomQuote.addEventListener('click', () => {})

    randomHouses.addEventListener('click', () =>{})

    randomCharacters.addEventListener('click', () => {})

    //Several random Quotes

function fetchData () {
fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then ((response) => response.json())
    .then((data) =>{
        quotes = data    
       //console.log (data)


       quotes.forEach((sentence, character) => {
        const listQuotes = document.createElement("li")
        listQuotes.textContent = selectedQuote

        listQuotes.addEventListener('click', () => {
            selectedQuote
        })
        getQuotes.appendChild(listQuotes)   
    })
    })


  
}


fetchData ()


//Houses and their members
fetch ("https://api.gameofthronesquotes.xyz/v1/houses")
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log (data)
    })


// Characters list and their quotes
fetch ("https://api.gameofthronesquotes.xyz/v1/characters")
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log (data)
    }) 

})