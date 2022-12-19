

document.addEventListener ("DOMContentLoaded", () => {

//Several random Quotes

fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then (function(response) {
        return response.json()
    })
        .then(function(data) {
            //console.log (data)
        
   
let randomQuotes = ""
   data.map((quotes) => {
    randomQuotes = `<div class="tm-textbox tm-bg-dark">
    <p id="random">
       ${quotes.sentence}
    </p>
    <p class="mb-4">
       ${quotes.character}
    </p>
    </div>`
})

document.getElementByClass("quotes").innerHTML=randomQuotes
})
   


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