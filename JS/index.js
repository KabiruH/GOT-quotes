//Data
const loginBtn = document.getElementById("loginBtn")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const login = document.getElementById("login")

let quotes = []
let houses = []
let characters = []
let selectedQuote = null
let Search = null


// Login Page
window.addEventListener("load", () => {

    loginBtn.addEventListener("click", () => {
        const username = usernameInput
        const password = passwordInput

        if (!username || username == "" && !password || password == "") {

            document.querySelector("locked").addEventListener("click", function () {
                let p = document.querySelector("locked");
                let visibility = getComputedStyle(p).visibility;
                if (visibility == "hidden")
                    p.style.visibility = "visible";
                else
                    p.style.visibility = "hidden";
            })

        } else {
            let access = document.getElementById("locked")
            login.style.visibility = "hidden"
            access.style.visibility = "visible"
        }
    })
})


//Several random Quotes
function fetchData() {
    fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('network error')
            }
        })
        .then((response) => {
            quotes = response
            getQuotes(quotes)
        })

    function getQuotes(quotes) {
        if (quotes) {
            quotes.forEach((quote) => {
                const listQuote = document.createElement("li")
                listQuote.innerHTML = `sentence: ${quote.sentence} </br> character name: ${quote.character.name}  </br> House name: ${quote.character.house.name} </br> House slug: ${quote.character.house.slug} </br> </br>`
                const lost = document.getElementById('quotesHere')
                lost.innerHTML = listQuote.innerHTML
            })
        }
    }
    let btn = document.getElementById("getQuote")
    btn.addEventListener('click', fetchData)
}
fetchData()



// Houses and their members
function fetchHouses() {
    fetch("https://api.gameofthronesquotes.xyz/v1/houses")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('network error')
            }
        })
        .then((response) => {
            houses = response
            getHouses(houses)
        })

    function getHouses(houses) {
        if (houses) {
            houses.forEach((house) => {
                const listHouse = document.createElement("li")
                listHouse.innerHTML = `Slug: ${house.slug} </br> Name: ${house.name}</br></br>`
                const places = document.getElementById('housesHere')
                places.innerHTML += listHouse.innerHTML
            })

        }
    }
    let btn = document.getElementById("getHouse")
    btn.addEventListener('click', fetchHouses)
}
fetchHouses()



// Characters list and their quotes
function fetchCharacters() {
    fetch("https://api.gameofthronesquotes.xyz/v1/characters")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('network error')
            }
        })
        .then((response) => {
            characters = response
            getCharacters(characters)
        })
    function getCharacters(characters) {
        if (characters) {
            characters.forEach((character) => {
                const listCharacter = document.createElement("li")
                listCharacter.innerHTML = `Name: ${character.name} </br> Slug: ${character.slug}</br> House slug: ${character.house.slug}</br> House name: ${character.house.name}</br> Quote: ${character.quotes}</br></br>`
                const people = document.getElementById('charactersHere')
                people.innerHTML += listCharacter.innerHTML
            })

        }
    }
    let btn = document.getElementById("getCharacters")
    btn.addEventListener('click', fetchCharacters)

}
fetchCharacters()

