let playerHand = []
let dealerHand = []
let dealerText = document.getElementById("dealerCards-el")
let playerText = document.getElementById("playerCards-el")

startGame()

function startGame()
{
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

function Score(hand = [])
{
    let total = 0
    let totalAs = 0

    for (let i = 0; i < hand.length; i++) 
    {
        if (hand[i] === 1) 
        {
            totalAs++  
        }
        else
        {
            total += getValue()
        }

    }

    if (totalAs > 0) 
    {
        if (totals > 1) 
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

    return total
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