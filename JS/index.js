

document.addEventListener ("DOMContentLoaded", () => {

    
    //Data
    
    const getHouse = document.getElementsByClassName ("houses")
    const getCharacters = document.getElementsByClassName ("Characters")
    let quotes = []
    let selectedQuote = null
    
    

    //Several random Quotes


fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then ((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error ('network error')
        }
    })
    .then((data) =>{
        console.log (data)
        showQuote (data)
    })

    function showQuote(data) {
        const getQuote = data
        const quoteDiv = document.getElementsByClassName ("quotes")
        const theQuotes = document.createElement("ul")
     
        quoteDiv.appendChild(theQuotes)
    }
    
    showQuote ()
    
  




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