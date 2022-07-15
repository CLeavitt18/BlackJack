let playerHand = []
let dealerHand = []
let dealerText = document.getElementById("dealerCards")

startGame()

function startGame()
{
    /*if (playerHand.length > 0) 
    {
        let handSize = playerHand.length

        for (let i = 0; i < handSize; i++) 
        {
            playerHand.pop()
        }

        handSize = dealerHand.length

        for(let i = 0; i > handSize; i++)
        {
            dealerHand.pop()
        }
    }*/

    dealerHand.push(randomCard())
    console.log(dealerHand[0])

    switch(dealerHand[dealerHand.length - 1])
    {
        case 1:
            dealerText.textContent += " A"
            break
        case 11:
            dealerText.textContent += " J"
            break
        case 12:
            dealerText.textContent += " Q"
            break
        case 13:
            dealerText.textContent += " K"
            break
        default:
            dealerText.textContent += " " + dealerHand[dealerHand. length - 1] 
    }
}

function renderGame()
{

}

function randomCard()
{
    let value = Math.floor(Math.random() * 13) + 1 
    return value
}