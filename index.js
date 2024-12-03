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
function moneyCounter() {
    document.getElementById("money").textContent = money 
}
function getMoney() {
    money = money + 0.01
    console.log(money)
}





// Food treats, drinks etc(eating mechanics) -Emilia 
//      Wooper food(pop out menu, need to interact with money)
//       Feeding Wooper increases money 







// Wooper general activity -Isabella 
//      Wooper needs to be able to walk around, interact when clicked, walk around the screen properly(i.e not going through walls), 
//      interact with other items(sleep in bed, splash in pool). 
//      Need random generated actions for Wooper(using functions, like walk forward) 

let randomMover = document.getElementById("randomMover")  //this function imports the element randomMover from my html
// this stuff is a test to show how everything works 
function moveRandomMover(){
    randomMover.style.left = Math.floor(Math.random()*100) + 'px'  //px are neccesary to move it left/right by pixels- in this it moves from -99-->99px at a time. If I were to set it to percent it would move the percentage of the width of the screen
    randomMover.style.top = Math.floor(Math.random()*100) + 'px' //floor rounds the value to the nearest integer. math.random is the thing that randomly selects this stuff.
}

setInterval(moveRandomMover, 1000) //each 1 = one millisecond so 1000 is one per second. our thing moves once per second at the moment. 