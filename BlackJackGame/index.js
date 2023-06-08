let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let flag = true

let player = {
    name: "Shubhashish",
    chips: 145
}
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el") //another way of selecting html element
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name+": $"+player.chips

function getRandomCard(){
    let num =  Math.ceil(Math.random()*13)
    if(num>10) return 10
    else if( num === 1) return 11
    else return num
}

function startGame(){
    isAlive = true
    if(isAlive && !hasBlackJack){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame(){
sumEL.textContent ="Sum: "+ sum
    
        cardEl.textContent = "Cards: "+cards

    if(sum <21){
        message = "Do you want to draw another card?🙄"
    }
    else if(sum===21){
        message = "Wohoo! You've got Blackjack!🤑"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        cards.push(card)
        sum+= card
        renderGame()
    }
}