let hands = ["rock","paper","scissor"]

function getHand() {
    let randomValue = Math.floor(Math.random()*3)
    return hands[randomValue]
}

console.log(getHand())