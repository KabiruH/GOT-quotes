//Data
const loginBtn = document.getElementById("loginBtn")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const login = document.getElementById("login")

const getQuote = document.getElementsByClassName("quotes")
const getHouse = document.getElementsByClassName("houses")
const getCharacters = document.getElementsByClassName("Characters")

let quotes = []
let houses = []
let characters = []
let selectedQuote = null
let Search = null
// let isLoggedIn = false


window.addEventListener("load", () => {

    // function changeStyle(){
    ;
    // //     element.style.display = "none";
    // } 

    loginBtn.addEventListener("click", () => {
        const username = usernameInput
        const password = passwordInput

        if (!username || username == "" && !password || password == "") {
           
            document.querySelector("locked").addEventListener("click", function(){
                let p = document.querySelector("locked");
                let visibility = getComputedStyle(p).visibility;
                if(visibility == "hidden")
                  p.style.visibility = "visible";
                else
                  p.style.visibility = "hidden";
              })
            // let access = document.getElementById("locked")
            // // isLoggedIn = false
            // access.style.display = "none"
            //alert("Fill in all the fields")
        } else {
            let access = document.getElementById("locked")
            login.style.visibility = "hidden"
            access.style.visibility = "visible"
            // function changeStyle(){
            //     var element = document.getElementById("locked");
            //     element.style.display = "show";
            // }
        }
    })
})


//Several random Quotes


function fetchData() {
    fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
        .then((response) => {
            // quotes = response.json() 
            // getQuotes (quotes)
            if (response.ok) {

                //console.log (quotes)

                return response.json()
            } else {
                throw new Error('network error')
            }
        })
        .then((response) => {
            quotes = response
            getQuotes(quotes)

            console.log(quotes)

        })

    function getQuotes(quotes) {
        console.log(quotes)

        if (quotes) {

            quotes.forEach((quote) => {
                // console.log('quote sentence', quote.sentence)
                // console.log('quote character', quote.character)
                // console.log('quote character name', quote.character.name)
                // console.log('quote character slug', quote.character.slug)
                // console.log('quote character house name', quote.character.house.name)
                // console.log('quote character house slug', quote.character.house.slug)

                const listQuote = document.createElement("li")
                listQuote.innerHTML = `sentence: ${quote.sentence} </br> character name: ${quote.character.name}  </br> character house name: ${quote.character.house.name} </br> character house slug: ${quote.character.house.slug} </br> </br>`
                const lost = document.getElementById('quotesHere')
                lost.innerHTML += listQuote.innerHTML

                //console.log('listQuote', listQuote)

            })

        }

    }

    let btn = document.getElementById("getQuote")
    btn.addEventListener('click', function () {
        location.reload();
    })
}

fetchData()

//Houses and their members
// fetch ("https://api.gameofthronesquotes.xyz/v1/houses")
//     .then ((response) => {
//         if (response.ok) {
//             return response
//         }
//     })


// Characters list and their quotes
fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })

