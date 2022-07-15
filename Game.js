let playerHand = []
let dealerHand = []

let dealerText = document.getElementById("dealerCards-el")
let dealerScoreText = document.getElementById("dealerScore-el")

let playerText = document.getElementById("playerCards-el")
let playerScoreText = document.getElementById("playerScore-el")

let messageText = document.getElementById("message-el")

let gameOver = false

let dealerScore = 0
let playerScore = 0

startGame()

function startGame()
{
    gameOver = false

    dealerHand = []
    playerHand = []

    dealerHand.push(randomCard())
    dealerHand.push(randomCard())

    playerHand.push(randomCard())
    playerHand.push(randomCard())

    renderGame();
}

function renderGame()
{
    dealerText.textContent = "Dealer Cards: "

    for (let i = 0; i < dealerHand.length; i++) 
    {
        if (i >= dealerHand.length - 1) 
        {
            dealerText.textContent += " ?"    
        }
        else
        {
            dealerText.textContent += " " + getSuit(dealerHand[i])
        }

    }

    playerText.textContent = "Your Cards: "

    for (let i = 0; i < playerHand.length; i++) 
    {
        playerText.textContent += " " + getSuit(playerHand[i])
    }

    Score()
    checkGameState()
}

function newCard()
{
    if (gameOver) 
    {
        return;    
    }

    dealerHand.push(randomCard())

    playerHand.push(randomCard())

    renderGame()
}

function getSuit(num)
{
    switch(num)
    {
        case 1:
            return "A"
        case 11:
            return "J"
        case 12:
            return "Q"
        case 13:
            return "K"
        default:
            return num
    }
}

function Score()
{
    let total = 0
    let totalAs = 0

    for (let i = 0; i < playerHand.length; i++) 
    {
        if (playerHand[i] === 1) 
        {
            totalAs++  
        }
        else
        {
            total += getValue(playerHand[i])
        }
    }

    if (totalAs > 0) 
    {
        if (totalAs > 1) 
        {
            total += totalAs * 1    
        }
        else
        {
            if (total + 11 <= 21) 
            {
                total += 11   
            }
        }
    }

    playerScore = total
    playerScoreText.textContent = "Your Score: " + playerScore

    total = 0
    totalAs = 0

    for (let i = 0; i < dealerHand.length; i++) 
    {
        if (dealerHand[i] === 1) 
        {
            totalAs++  
        }
        else
        {
            total += getValue(dealerHand[i])
        }
    }

    if (totalAs > 0) 
    {
        if (totalAs > 1) 
        {
            total += totalAs * 1    
        }
        else
        {
            if (total + 11 <= 21) 
            {
                total += 11   
            }
        }
    }

    dealerScore = total
}

function getValue(num)
{
    switch(num)
    {
        case 11:
        case 12:
        case 13:
            return 10
        default:
            return num
    }
}

function randomCard()
{
    let value = Math.floor(Math.random() * 13) + 1 
    return value
}

function playerEndsGame()
{
    
}

function checkGameState()
{
    if (gameOver) 
    {
        return    
    }

    if (dealerScore === 21) 
    {
        gameOver = true
        renderGame()
        messageText.textContent = "Dealer Won, you lost"
    }
    else if (playerScore === 21) 
    {
        renderGame()
        gameOver = true
        messageText.textContent = "You Won, the dealer lost!!"
    }
}