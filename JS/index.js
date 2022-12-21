
    //Data
    const loginBtn = document.getElementById("loginBtn")
    const usernameInput = document.getElementById("username")
    const passwordInput = document.getElementById("password")
    const login = document.getElementById("login")
    
    const getQuote = document.getElementsByClassName ("quotes")
    const getHouse = document.getElementsByClassName ("houses")
    const getCharacters = document.getElementsByClassName ("Characters")
    
    let quotes = []
    let selectedQuote = null
    letSearch = null
    
    window.addEventListener ("load", () => {
        getQuotes()
    

        
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


fetch ("https://api.gameofthronesquotes.xyz/v1/random/5") 
    .then ((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error ('network error')
        }
    })
    .then((quotes) =>{
        console.log (quotes)
               
    })

    function getQuotes () {
        console.log ({quotes})

        if (quotes) {
            quotes.forEach((sentence, character) => {
                const listQuotes = document.createElement("li")
                listQuotes.textContent = sentence.character
                listQuotes.setAttribute("class", "listQuotes")

                listQuotes.addEventListener("click", () => {
                    selectedQuote = sentence.character
                })

                getQuote.append(listQuotes)
            })
        }
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