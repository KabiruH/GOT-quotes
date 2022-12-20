

document.addEventListener ("DOMContentLoaded", () => {

    //Data
    const randomQuotes = document.getElementsByClassName ("quotes")
    const getHouses = document.getElementsByClassName ("houses")
    const getCharacters = document.getElementsByClassName ("Characters")





    //Several random Quotes

function fetchData () {
fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then (function(response) {
        return response.json()
    })
        .then(function(data) {
       //console.log (data)

  
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