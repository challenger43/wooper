//Isabella- wooper needs random movements, speed, turns ar

// let randomMover = document.getElementById("randomMover")  //this function imports the element randomMover from my html
// // this stuff is a test to show how everything works 
// function moveRandomMover(){
//     randomMover.style.left = Math.floor(Math.random()*1000) + 'px'  //px are neccesary to move it left/right by pixels- in this it moves from -99-->99px at a time. If I were to set it to percent it would move the percentage of the width of the screen
//     randomMover.style.top = Math.floor(Math.random()*1000) + 'px' //floor rounds the value to the nearest integer. math.random is the thing that randomly selects this stuff.
// } 

// setInterval(moveRandomMover, 1000) //each 1 = one millisecond so 1000 is one per second. our thing moves once per second at the moment.


let wooperSprite = document.getElementById("wooperSprite") //grabs wooperSprite from the html

const pixelsPerSecond = 150 //the amount of pixels wooper per second
function moveWooperSprite() {
    console.log("woop")
    let prev = Number(wooperSprite.style.left.substring(0, wooperSprite.style.left.length - 2))  //number makes it a number, substring makes a string inside of a string  
    let curr = Math.floor(Math.random() * 1000)
    let direction = Math.sign(prev - curr) //sign makes it so it will either end up being -1 or positive 1, based on the value inside the parentheses
    let time = Math.abs(prev - curr) / pixelsPerSecond //takes the distance between wooper's previous location to wooper's current location, then dividing it by the pixels per second to find the total time wooper needs to get to the new location
    wooperSprite.style.transitionDuration = time.toFixed(2) + "s" //links back to the css to control the wooper moving, s changes it to seconds and sets the time that css needs to move wooper
    wooperSprite.style.left = curr + "px" //sets the current value to pixels
    //if positive go left if negative go right
    for (let child of wooperSprite.children) {
        if (direction == -1) {
            child.style.transform = "rotateY(180deg)";
        } else {
            child.style.transform = "rotateY(0deg)";
        }
    }
    setTimeout(moveWooperSprite, time.toFixed(2) * 1000 + Math.random() * 2000) //sets the amount of time wooper must wait before each iteration of the function
}
moveWooperSprite(); //you need to call the function to make it actually happen.

//techincally this is Khai's job but I had extra time so I decided to make the money sync up and update
let money = 0
let woopcoin = "Woopcoin: "
let purchase = 100
let mushroomPrice = 5
let multiplyer = 1
//those variables Khai made

function moneyUpdate() {
  setInterval(moneyUpdate, 1000)
  document.getElementById("money").textContent = woopcoin
  console.log("it worked" + money)
}




// Money - Khai
//     Needs to be able to retain information(if possible)
//     Gets money from doing various things(like food)
//     Can spend money on things such as stores etc
//     Makes money with Wooper clicker (basically petting Wooper)


document.getElementById("cost").textContent = "Cost: " + mushroomPrice/100

function moneyCounter() {
    money = money + multiplyer
    document.getElementById("money").textContent = woopcoin + money/100
}
 
function moneyLeft() { 
  console.log("it worked")
  
  money = money - mushroomPrice

  if (money < 0) {
      document.getElementById("money").textContent = "FAILURE"
      money = money* 10
  }
  else {
      if (multiplyer == 1) {
        multiplyer = multiplyer + 4
      } else {
        multiplyer = multiplyer + 5
      }
      document.getElementById("money").textContent = woopcoin + " " + money / 100
      mushroomPrice = mushroomPrice * 2
      document.getElementById("cost").textContent = "Cost: " + mushroomPrice/100

  }
}




//Emi's Code(make elements draggable, ect)
function show() { 
  document.getElementById('ShopPic').style.display="block"
  console.log("shop button test")
}


// Petting Wooper-Sydney CODE HERE
//  Putting clothes on wooper
//      i.e hat needs to appear/disappear depending on which hat is selected in the store

let hats = ["tophat", "croissant", "elegant", "donut"]

function changeHat(cost, newHat){
  if (cost > money){
    return;
  }
  money -= cost
  for (const hat of hats){
    let hatEl = document.getElementById(hat)
    if (hat == newHat){
      hatEl.hidden = false
      console.log("show hat")
    } else {
      hatEl.hidden = true
      console.log("hide hat")
    }
  }
}
changeHat(0, "tophat")
console.log(money)

