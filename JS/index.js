
    //Data
    const loginBtn = document.getElementById("loginBtn")
    const usernameInput = document.getElementById("username")
    const passwordInput = document.getElementById("password")
    const login = document.getElementById("login")
    
    const getQuote = document.getElementsByClassName ("quotes")
    const getHouse = document.getElementsByClassName ("houses")
    const getCharacters = document.getElementsByClassName ("Characters")
    
    let quotes = []
    let houses = []
    let characters = []
    let selectedQuote = null
    letSearch = null
    
    window.addEventListener ("load", () => {
        //getQuotes()
    

        
    // loginBtn.addEventListener("click", () => {
    //     const username = usernameInput
    //     const password = passwordInput
          
    //     if (!username || username == "" || !password || password == "") {
    //     alert("Fill in all the fields")
    //     } else {
    //     login.style.visibility = "hidden"
    //     }
    //     })
        
        
        //Several random Quotes


function fetchData () {
    fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then ((response) => {
        // quotes = response.json() 
        // getQuotes (quotes)
        if (response.ok) {
            
            //console.log (quotes)
            
            return response.json()
        } else {
            throw new Error ('network error')
        }
    })
    .then((response) =>{
        quotes = response 
        getQuotes (quotes)
        
       console.log (quotes)
               
    })

    function getQuotes (quotes) { 
        console.log (quotes)

        if (quotes) {

            quotes.forEach((quote) => {
                console.log('quote sentence', quote.sentence)
                console.log('quote character', quote.character)
                console.log('quote character name', quote.character.name)
                console.log('quote character slug', quote.character.slug)
                console.log('quote character house name', quote.character.house.name)
                console.log('quote character house slug', quote.character.house.slug)
    
                const listQuote = document.createElement("li")
                listQuote.innerHTML = `sentence: ${quote.sentence} </br> character name: ${quote.character.name}  </br> character house name: ${quote.character.house.name} </br> character house slug: ${quote.character.house.slug} </br> </br>`
                const lost = document.getElementById('quotesHere')
                lost.innerHTML += listQuote.innerHTML
    
                console.log('listQuote', listQuote)


        })
        let btn = getElementById("getQuote")
        btn.addEventListener('click', () => {
            listQuote
        })
    }

    }
}

fetchData ()

  //Houses and their members
// fetch ("https://api.gameofthronesquotes.xyz/v1/houses")
//     .then ((response) => {
//         if (response.ok) {
//             return response
//         }
//     })


// Characters list and their quotes
fetch ("https://api.gameofthronesquotes.xyz/v1/characters")
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        console.log (data)
    }) 

})