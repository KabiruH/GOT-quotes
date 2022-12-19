

document.addEventListener ("DOMContentLoaded", () => {

//Several random Quotes

   fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then (function(response) {
        return response.json()
    })
        .then(function(data) {
            console.log (data)
        })
   
        function getRandomQuotes (RandomQuotes) {
            document.getElementById ("random")

   }


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