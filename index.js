// Petting Wooper-Sydney CODE HERE
//  Putting clothes on wooper
//      i.e hat


    

// Money - Khai
//     Needs to be able to retain information(if possible)
//     Gets money from doing various things(like food)
//     Can spend money on things such as stores etc
//     Makes money with Wooper clicker (basically petting Wooper)

let money = 0
let woopcoin = "woopcoin"
let purchase = 100
let price = 5
let display = woopcoin + " " + money/100 
function moneyCounter() {       
    money = money + 1
    document.getElementById("money").textContent = woopcoin + " " + money/purchase
    console.log((money / 100).toFixed(2))
}





// Food treats, drinks etc(eating mechanics) -Emilia 
//      Wooper food(pop out menu, need to interact with money)
//       Feeding Wooper increases money 




function moneyLeft(){
    price=price*2
    money = money-price
    
    if (money<0) {
        document.getElementById("money").textContent = "FAILURE"
        money=-10000000000
    }
     else {
        document.getElementById("money").textContent = woopcoin + " " + money/100

    }
}
function FeedDoughnut(){
    money = money + 10
    document.getElementById("money").textContent = woopcoin + " " + money/purchase
    if (money<0) {
        document.getElementById("money").textContent = "FAILURE"
    }

}

function FeedMushroom(){
    money = money + 5
   

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

//Isabella- wooper needs random movements, speed, turns ar

let wooperSprite = document.getElementById("wooperSprite") //grabs wooperSprite from the html

let canMove = true

const pixelsPerSecond = 150 //the amount of pixels wooper can move per second
function moveWooperSprite(){
    let prev = Number(wooperSprite.style.left.substring(0,wooperSprite.style.left.length-2))  //number makes it a number, substring makes a string inside of a string  
    let curr = Math.floor(Math.random()*700)
    let direction = Math.sign(prev-curr)
    let time = Math.abs(prev-curr)/pixelsPerSecond //takes the distance between wooper's previous location to wooper's current location, then dividing it by the pixels per second to find the total time wooper needs to get to the new location
    wooperSprite.style.transitionDuration = time.toFixed(2) + "s" //links back to the css to control the wooper moving, s changes it to seconds and sets the time that css needs to move wooper
    wooperSprite.style.left = curr + "px" //sets the current value to pixels
    //if positive go left if negative go right
    if (direction == -1){
        wooperSprite.children[0].style.transform = "rotateY(0deg)"
    } else {
        wooperSprite.children[0].style.transform = "rotateY(180deg)"
    }
    setTimeout(moveWooperSprite, time.toFixed(2) * 1000 + Math.random() * 2000 + 1000)

}
moveWooperSprite();

// setInterval(moveWooperSprite, 1000, Math.floor(Math.random()*10000)) //picks how often wooper moves


