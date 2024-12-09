// Petting Wooper-Sydney CODE HERE
//      Petting Wooper changes Wooper's face expression
//      Hearts come out depending on how ferociously you pet it. 
//      Gets money from this(which needs to be linked back to 


    

// Money - Khai
//     Needs to be able to retain information(if possible)
//     Gets money from doing various things(like food)
//     Can spend money on things such as stores etc
//     Makes money with Wooper clicker (basically petting Wooper)

let money = 0
let woopcoin = "woopcoin"
let purchase = 100
      
    let display = woopcoin + " " + money/100 
function moneyCounter() {       
    money = money + 1
    document.getElementById("money").textContent = woopcoin + " " + money/purchase
    console.log((money / 100).toFixed(2))
}





// Food treats, drinks etc(eating mechanics) -Emilia 
//      Wooper food(pop out menu, need to interact with money)
//       Feeding Wooper increases money 

let cost = ""
let moneyspent = woopcoin - cost
function Moneyleft(){
    money = money-5
    document.getElementById("money").textContent = woopcoin + " " + money/purchase
    if (money<0) {
        document.getElementById("money").textContent = "FAILURE"
    }
}


// let randomMover = document.getElementById("randomMover")  //this function imports the element randomMover from my html
// // this stuff is a test to show how everything works 
// function moveRandomMover(){
//     randomMover.style.left = Math.floor(Math.random()*1000) + 'px'  //px are neccesary to move it left/right by pixels- in this it moves from -99-->99px at a time. If I were to set it to percent it would move the percentage of the width of the screen
//     randomMover.style.top = Math.floor(Math.random()*1000) + 'px' //floor rounds the value to the nearest integer. math.random is the thing that randomly selects this stuff.
// } 

// setInterval(moveRandomMover, 1000) //each 1 = one millisecond so 1000 is one per second. our thing moves once per second at the moment. 


// let wooperSprite = document.getElementById("wooperSprite")

// function moveWooperSprite(){
//     wooperSprite.style.left = Math.floor(Math.random()*1000) +'px'
// }

// setInterval(moveWooperSprite, 5000)

let wooperSprite = document.getElementById("wooperSprite")

const pixelsPerSecond = 150
function moveWooperSprite(){
    let prev = Number(wooperSprite.style.left.substring(0,wooperSprite.style.left.length-2))
    let curr = Math.floor(Math.random()*700)
    let time = Math.abs(prev-curr)/pixelsPerSecond
    wooperSprite.style.transitionDuration = time.toFixed(2) + "s"
    wooperSprite.style.left = curr + "px"

}

setInterval(moveWooperSprite, 3000, Math.floor(Math.random()*10000))


